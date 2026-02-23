using MicroSerices.Auth.API.Models.Dto;

namespace MicroSerices.Auth.API.Service.IService
{
    public interface IAuthService
    {
        Task<string> Register(RegistrationRequestDto registrationDto);
        Task<UserDto> RegisterUser(RegistrationRequestDto registrationRequestDto);
        Task<LoginResponseDto> Login(LoginRequestDto loginRequestDto);
        Task<bool> AssignRole(string email, string roleName);
    }
}
