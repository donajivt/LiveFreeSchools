using LiveFree.Beacons.API.Application.Interfaces;
using LiveFree.Beacons.API.Infrastructure.Mappings;
using LiveFree.Beacons.API.Infrastructure.Beacons;
using LiveFree.Beacons.API.Infrastructure.Persistence;
using LiveFree.Beacons.API.Infrastructure.Repositories;
using LiveFree.Beacons.API.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var corsPolicy = "AllowAll";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: corsPolicy, policy =>
    {
        policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddAutoMapper(typeof(BeaconMappingProfile));
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        b => b.MigrationsAssembly("LiveFree.Beacons.API.Infrastructure")
    ));

// Add services
builder.Services.AddScoped<IBeaconService, BeaconService>();
builder.Services.AddScoped<IBeaconRepository, BeaconRepository>();

//JWT y Swagger
builder.AddAppAuthentication();
builder.Services.AddSwaggerWhitJwtAuthentication();

//Controllers
builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();


app.UseSwagger();
app.UseSwaggerUI();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors(corsPolicy);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

void ApplyMigration()
{
    using (var scope = app.Services.CreateScope())
    {
        var _db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        if (_db.Database.GetPendingMigrations().Count() > 0)
        {
            _db.Database.Migrate();
        }
    }
}