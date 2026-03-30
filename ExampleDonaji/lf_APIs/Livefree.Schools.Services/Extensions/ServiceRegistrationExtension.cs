using Microsoft.Extensions.DependencyInjection;

namespace Livefree.Schools.Services.Extensions
{
    public static class ServiceRegistrationExtension
    {
        public static IServiceCollection AddSchoolsServices(this IServiceCollection services)
        {
            services.AddScoped<IBeaconService, BeaconService>();
            return services;
        }
    }
}
