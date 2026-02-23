using MicroSerices.Auth.API.Models;

namespace MicroSerices.Auth.API.Service.IService
{
    public interface IJwtTokenGenerator
    {
        string GenerateToken(ApplicationUser applicationUser, IEnumerable<string> roles);
    }
}
