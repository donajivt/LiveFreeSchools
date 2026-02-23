using Microsoft.AspNetCore.Identity;

namespace MicroSerices.Auth.API.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Name {  get; set; }
    }

}
