using Livefree.Schools.Host.Endpoints;
using Livefree.Schools.Host.Services;

namespace Livefree.Schools.Host.Extensions
{
    public static class ServiceRegistrationExtension
    {
        public static IServiceCollection AddSchoolsEndpointsService(this IServiceCollection services)
        {
            services.AddScoped < IBeaconEndpoint, BeaconEndpoint>();

            return services;
        }
    }
}
