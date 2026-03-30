using Livefree.Schools.Host.Endpoints;
using Livefree.Schools.Models;
using Microsoft.AspNetCore.Mvc;

namespace Livefree.Schools.Host.Routes
{
    public static class BeaconsRoutes
    {
        public static WebApplication MapBeacons(this WebApplication app, string prefix = "beacons")
        {
            var group = app.MapGroup("/" + prefix);

            group.MapGet("", static (
                    [FromQuery] string? where,
                    [FromServices] IBeaconEndpoint endpoint) => endpoint.GetAllAsync(where))
                .WithName("GetBeacons")
                .WithOpenApi();

            group.MapGet("/{id:Guid}", (
                    [FromRoute] Guid id,
                    [FromServices] IBeaconEndpoint endpoint) => endpoint.GetAsync(id))
                .WithName("GetBeaconById")
                .WithOpenApi();

            group.MapPost("", (
                    [FromBody] BeaconModel model,
                    [FromServices] IBeaconEndpoint endpoint) => endpoint.CreateAsync(model))
                .WithName("CreateBeacon")
                .WithOpenApi();

            group.MapPut("", (
                    [FromBody] BeaconModel model,
                    [FromServices] IBeaconEndpoint endpoint) => endpoint.UpdateAsync(model.Id, model))
                .WithName("UpdateBeacon")
                .WithOpenApi();

            group.MapDelete("/{id:Guid}", (
                    [FromRoute] Guid id,
                    [FromServices] IBeaconEndpoint endpoint) => endpoint.DeleteAsync(id))
                .WithName("DeleteBeacon")
                .WithOpenApi();

            return app;
        }
    }
}
