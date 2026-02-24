using AutoMapper;
using LiveFree.Beacons.API.Application.Dtos;
using LiveFree.Beacons.API.Domain.Entities;

namespace LiveFree.Beacons.API.Infrastructure.Persistence
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<BeaconDto, Beacon>().ReverseMap();
            });
            return mappingConfig;
        }
    }
}
