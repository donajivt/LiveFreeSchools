using AutoMapper;
using LiveFree.Beacons.API.Application.Dtos;
using LiveFree.Beacons.API.Domain.Entities;

namespace LiveFree.Beacons.API.Infrastructure.Mappings
{
    public class BeaconMappingProfile : Profile
    {
        public BeaconMappingProfile()
        {
            CreateMap<BeaconDto, Beacon>().ReverseMap();

            CreateMap<BeaconEventDto, BeaconEvent>().ReverseMap();

            CreateMap<BeaconLocationDto, BeaconLocation>().ReverseMap();
        }
    }
}