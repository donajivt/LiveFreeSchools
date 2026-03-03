using MicroSerices.Auth.API.Models.Dto;
using MicroSerices.Auth.API.Service.IService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace MicroSerices.Auth.API.Controllers.V1
{
    [Route("api/[controller]")]
    [ApiController]
    public class authController : ControllerBase
    {
        private readonly IAuthService _authService;
        protected ResponseDto _response;

        public authController (IAuthService authService)
        {
            _authService = authService;
            _response = new();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegistrationRequestDto model)
        {
            var errorMessage = await _authService.Register(model);
            if (!string.IsNullOrEmpty(errorMessage))
            {
                _response.IsSuccess = false;
                _response.Message = errorMessage;
                return BadRequest(_response);
            }
            //si la respuesta es empty se regresa la confirmación del registro
            return Ok(_response);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto model)
        {
            var loginResponse = await _authService.Login(model);
            if (loginResponse.User == null)
            {
                _response.IsSuccess = false;
                _response.Message = "The username or password is incorrect";
                return BadRequest(_response);
            }
            _response.Result = loginResponse;
            _response.Message = "Welcome";
            return Ok(_response);
        }

        [HttpPost("assignRole")]
        public async Task<IActionResult> AssignRole([FromBody] RegistrationRequestDto model)
        {
            var assignRoleSuccess = await _authService.AssignRole(model.Email, model.Role.ToUpper());
            if (!assignRoleSuccess)
            {
                _response.IsSuccess = false;
                _response.Message = "Role Assignment Error";
                return BadRequest(_response);
            }
            return Ok(_response);
        }

        [HttpPost("logout")]
        [Authorize]
        public async Task<IActionResult> LogOut()
        {
            var userId = User.FindFirst("sub")?.Value;

            var result = await _authService.Logout(userId);

            if (!result)
                return BadRequest();

            return Ok(new ResponseDto
            {
                IsSuccess = true,
                Message = "Logged out successfully"
            });
        }

        [HttpPost("refresh")]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenRequestDto dto)
        {
            var response = await _authService.RefreshToken(dto.RefreshToken);

            if (response.User == null)
            {
                return BadRequest(new ResponseDto
                {
                    IsSuccess = false,
                    Message = "Invalid refresh token"
                });
            }

            return Ok(new ResponseDto
            {
                IsSuccess = true,
                Result = response
            });
        }
    }
}
