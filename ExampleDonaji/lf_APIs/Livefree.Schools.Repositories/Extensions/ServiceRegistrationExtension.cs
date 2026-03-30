using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Livefree.Schools.Common.Mapper;
using Livefree.Schools.Common.Validator;
using Livefree.Schools.Models;
using Livefree.Schools.Repositories.Context;
using Livefree.Schools.Repositories.Mappers;
using Livefree.Schools.Repositories.Entities;

namespace Livefree.Schools.Repositories.Extensions;

public static class ServiceRegistrationExtension
{
    public static IServiceCollection AddSchoolsRepositories(this IServiceCollection services, string? connectionString)
    {
        services
            .Val()
            .IsNotNull();
        
        connectionString 
            .Val() 
            .IsNotNull() 
            .IsNotEmptyString();
        
        services.AddScoped<IBeaconRepository, BeaconRepository>();

        services.AddDbContext<SchoolDbContext>(options =>
            options.UseSqlServer(connectionString));

        services.AddSingleton<IMapper<BeaconEntity, BeaconModel>, BeaconMapper>();

        return services;
    } 
}

