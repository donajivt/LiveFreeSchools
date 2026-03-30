using System.ComponentModel.DataAnnotations.Schema;

namespace Livefree.Schools.Repositories.Entities
{
    [Table ("Beacons")]
    public class BeaconEntity
    {
        public Guid Id { get; set; }
        public string DeviceName { get; set; } = string.Empty;
        public int BeaconTypeId { get; set; } = 0;
        public string PhoneNumber { get; set; } = string.Empty;
        public long? DistrictId { get; set; }
        public long? SchoolId { get; set; }
        public long? FacultyId { get; set; }
        public bool IsAvailable { get; set; }
        public ICollection<BeaconLocationEntity>? Locations { get; set; }
        public ICollection<BeaconEventEntity>? Events { get; set; }
    }
}
