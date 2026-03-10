using AutoMapper;
using LiveFree.Beacons.API.Application.Dtos;
using LiveFree.Beacons.API.Domain.Entities;

namespace LiveFree.Beacons.API.Infrastructure.Mappings
{
    public class BeaconMappingProfile : Profile
    {
        public BeaconMappingProfile()
        {
            CreateMap<Beacon, BeaconDto>()
                .ForMember(
                    dest => dest.BeaconTypeName,
                    opt => opt.MapFrom(src => src.BeaconTypeNavigation.Name)
                )
                .ForMember(
                    dest => dest.Available,
                    opt => opt.MapFrom(src =>
                        src.IsAvailable ? "Available" : "Not Available"
                    )
                );

            CreateMap<BeaconDto, Beacon>()
                .ForMember(
                    dest => dest.BeaconTypeNavigation,
                    opt => opt.Ignore()
                );

            CreateMap<BeaconEventDto, BeaconEvent>().ReverseMap();

            CreateMap<BeaconLocationDto, BeaconLocation>().ReverseMap();

            CreateMap<BeaconTypeDto, BeaconType>().ReverseMap();
        }
    }
}