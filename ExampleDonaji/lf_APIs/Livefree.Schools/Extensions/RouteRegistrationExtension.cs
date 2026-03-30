using Livefree.Schools.Host.Routes;

namespace Livefree.Schools.Host.Extensions
{
    public static class RouteRegistrationExtension
    {
        public static WebApplication MapSchoolsRoutes (this WebApplication app)
        {
            app
                .MapBeacons(prefix: "beacons");

            return app;
        }
    }
}
