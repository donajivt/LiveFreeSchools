using MicroSerices.Auth.API.Data;
using MicroSerices.Auth.API.Models;
using MicroSerices.Auth.API.Models.Dto;
using MicroSerices.Auth.API.Service.IService;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace MicroSerices.Auth.API.Service
{
    public class AuthService : IAuthService
    {
        private readonly AppDbContext _appDbContext;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IJwtTokenGenerator _jwtTokenGenerator;

        public AuthService(AppDbContext appDbContext, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IJwtTokenGenerator jwtTokenGenerator)
        {
            _appDbContext = appDbContext;
            _userManager = userManager;
            _roleManager = roleManager;
            _jwtTokenGenerator = jwtTokenGenerator;
        }

        public async Task<bool> AssignRole(string email, string roleName)
        {
            //1. primero recuperamos la información del usuario
            var user = _appDbContext.ApplicationUsers.FirstOrDefault(u => u.Email.ToLower() == email.ToLower());
            if (user != null)
            {
                if (!_roleManager.RoleExistsAsync(roleName).GetAwaiter().GetResult())
                {
                    //2. creamos el rol si no existe
                    _roleManager.CreateAsync(new IdentityRole(roleName)).GetAwaiter().GetResult();
                }
                await _userManager.AddToRoleAsync(user, roleName);
                return true;
            }
            return false;
        }

        public async Task<bool> Logout(string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null) return false;

            user.RefreshToken = null;
            await _userManager.UpdateAsync(user);

            return true;
        }
        public async Task<LoginResponseDto> Login(LoginRequestDto loginRequestDto)
        {
            var user = _appDbContext.ApplicationUsers
    .FirstOrDefault(u => u.UserName.ToLower() == loginRequestDto.UserName.ToLower());

            if (user == null)
            {
                return new LoginResponseDto() { User = null, AccessToken = "" };
            }

            bool isValid = await _userManager.CheckPasswordAsync(user, loginRequestDto.Password);

            if (!isValid)
            {
                return new LoginResponseDto() { User = null, AccessToken = "" };
            }
            //consultamos los roles del usuario
            var roles = await _userManager.GetRolesAsync(user);
            //si el usuario es encontrado se genera el token
            var token = _jwtTokenGenerator.GenerateToken(user, roles);

            var refreshToken = _jwtTokenGenerator.GenerateRefreshToken();

            user.RefreshToken = refreshToken;
            user.RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(7);

            await _userManager.UpdateAsync(user);
            UserDto userDto = new()
            {
                Email = user.Email,
                Id = user.Id,
                Name = user.Name,
                PhoneNumber = user.PhoneNumber
            };
            LoginResponseDto loginResponseDto = new LoginResponseDto()
            {
                User = userDto,
                AccessToken = token,
                RefreshToken = refreshToken
            };
            return loginResponseDto;
        }
        public async Task<LoginResponseDto> RefreshToken(string refreshToken)
        {
            var user = _userManager.Users
                .FirstOrDefault(u => u.RefreshToken == refreshToken);

            if (user == null ||
                user.RefreshTokenExpiryTime <= DateTime.UtcNow)
            {
                return new LoginResponseDto
                {
                    User = null,
                    AccessToken = ""
                };
            }

            var roles = await _userManager.GetRolesAsync(user);

            var newAccessToken = _jwtTokenGenerator.GenerateToken(user, roles);
            var newRefreshToken = _jwtTokenGenerator.GenerateRefreshToken();

            user.RefreshToken = newRefreshToken;
            user.RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(7);

            await _userManager.UpdateAsync(user);

            return new LoginResponseDto
            {
                AccessToken = newAccessToken,
                RefreshToken = newRefreshToken,
                User = new UserDto
                {
                    Email = user.Email,
                    Id = user.Id,
                    Name = user.Name,
                    PhoneNumber = user.PhoneNumber
                }
            };
        }

        public async Task<String> Register(RegistrationRequestDto registrationRequestDto)
        {
            ApplicationUser user = new()
            {
                UserName = registrationRequestDto.Email,
                Email = registrationRequestDto.Email,
                NormalizedEmail = registrationRequestDto.Email.ToUpper(),
                Name = registrationRequestDto.Name,
                PhoneNumber = registrationRequestDto.PhoneNumber
            };
            try
            {
                //pasamos los datos del usuario y lo que se espera como password
                var result = await _userManager.CreateAsync(user, registrationRequestDto.Password);
                if (result.Succeeded)
                {
                    var userToReturn = _appDbContext.ApplicationUsers.First(u => u.UserName == registrationRequestDto.Email);
                    UserDto userDto = new()
                    {
                        Email = userToReturn.Email,
                        Id = userToReturn.Id,
                        Name = userToReturn.Name,
                        PhoneNumber = userToReturn.PhoneNumber
                    };
                    return "";
                }
                else
                {
                    return result.Errors.FirstOrDefault().Description;
                }
            }
            catch (Exception ex)
            {
                _ = ex.Message.ToLower();
            }
            return "Error Encountered";
        }

        public async Task<UserDto> RegisterUser(RegistrationRequestDto registrationRequestDto)
        {
            ApplicationUser user = new()
            {
                UserName = registrationRequestDto.Email,
                Email = registrationRequestDto.Email,
                NormalizedEmail = registrationRequestDto.Email.ToUpper(),
                Name = registrationRequestDto.Name,
                PhoneNumber = registrationRequestDto.PhoneNumber
            };
            try
            {
                //pasamos los datos del usuario y lo que se espera como password
                var result = await _userManager.CreateAsync(user, registrationRequestDto.Password);
                if (result.Succeeded)
                {
                    var userToReturn = _appDbContext.ApplicationUsers.First(u => u.UserName == registrationRequestDto.Email);
                    UserDto userDto = new()
                    {
                        Email = userToReturn.Email,
                        Id = userToReturn.Id,
                        Name = userToReturn.Name,
                        PhoneNumber = userToReturn.PhoneNumber
                    };
                    return userDto;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
            return new UserDto();
        }
    }
}
