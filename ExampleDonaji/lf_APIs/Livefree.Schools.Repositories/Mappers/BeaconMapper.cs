using Livefree.Schools.Common.Mapper;
using Livefree.Schools.Models;
using Livefree.Schools.Repositories.Entities;

namespace Livefree.Schools.Repositories.Mappers
{
    public class BeaconMapper : IMapper<BeaconEntity, BeaconModel>
    {
        public BeaconModel Map(BeaconEntity source)
        {
            var events = source.Events?.Select(e => new BeaconEventModel
            {
                BeaconId = e.BeaconId,
                EmergencyType = e.EmergencyType,
                Latitude = e.Latitude,
                Longitude = e.Longitude,
                ReverseGeocode = e.ReverseGeocode,
                Address1 = e.Address1,
                Address2 = e.Address2,
                Address3 = e.Address3,
                City = e.City,
                State = e.State,
                PostalCode = e.PostalCode,
                CreatedOnUTC = e.CreatedOnUTC,
                CreatedBy = e.CreatedBy
            }).ToList() ?? new List<BeaconEventModel>();

            var locations = source.Locations?.Select(l => new BeaconLocationModel
            {
                BeaconId = l.BeaconId,
                LocationDateUTC = l.LocationDateUTC,
                Street1 = l.Street1,
                Street2 = l.Street2,
                Locality = l.Locality,
                State = l.State,
                PostalCode = l.PostalCode,
                Country = l.Country,
                ReverseGeocode = l.ReverseGeocode,
                Latitude = l.Latitude,
                Longitude = l.Longitude,
                BatteryLevel = l.BatteryLevel
            }).ToList() ?? new List<BeaconLocationModel>();

            return new BeaconModel()
            {
                Id = source.Id,
                DeviceName = source.DeviceName,
                BeaconTypeId = source.BeaconTypeId,
                PhoneNumber = source.PhoneNumber,
                DistrictId = source.DistrictId,
                SchoolId = source.SchoolId,
                FacultyId = source.FacultyId,
                IsAvailable = source.IsAvailable,
                Events = events,
                Locations = locations,
            };
        }
        public BeaconEntity Map(BeaconModel destination)
        {
            return new BeaconEntity()
            {
                Id = destination.Id,
                BeaconTypeId = destination.BeaconTypeId,
                DeviceName = destination.DeviceName,
                PhoneNumber = destination.PhoneNumber,
                DistrictId = destination.DistrictId,
                SchoolId = destination.SchoolId,
                FacultyId = destination.FacultyId,
                IsAvailable = destination.IsAvailable,
            };
        }
    }
}
