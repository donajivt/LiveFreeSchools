using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using MicroSerices.Auth.API.Models;
using MicroSerices.Auth.API.Service.IService;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
namespace MicroSerices.Auth.API.Service
{
    public class JwtTokenGenerator : IJwtTokenGenerator
    {
        private readonly JwtOptions _jwtOptions;
        public JwtTokenGenerator(IOptions<JwtOptions> jwtOptions)
        {
            _jwtOptions = jwtOptions.Value;
        }
        public string GenerateToken(ApplicationUser applicationUser, IEnumerable<string> roles)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtOptions.Secret);

            var claimsList = new List<Claim>
            {
                new Claim (JwtRegisteredClaimNames.Email, applicationUser.Name),
                new Claim (JwtRegisteredClaimNames.Sub, applicationUser.Id),
                new Claim (JwtRegisteredClaimNames.Name, applicationUser.UserName.ToString())
            };

            //agregamos el rol de los usuarios junto con los claims
            claimsList.AddRange(roles.Select(role=> new Claim(ClaimTypes.Role, role)));

            //ahora necesitamos un token descriptor: contiene toda la descripcion del token
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Audience = _jwtOptions.Audience,
                Issuer = _jwtOptions.Issuer,
                Subject = new ClaimsIdentity(claimsList),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor); //tokenHandler.GenerateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
