using System.Security.Claims;

namespace Livefree.Schools.Host.Services
{
    public class AuthorizationContextService(HttpContext context)
    {
        public readonly ClaimsPrincipal User = context.User;
    }
}
