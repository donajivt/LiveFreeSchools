namespace LiveFree.Beacons.API.Domain.Entities
{
    public class Beacon
    {
        public int Id { get; set; }

        public string DeviceName { get; set; } = string.Empty;

        public int BeaconType { get; set; } = 0;

        public long PhoneNumber { get; set; }

        public int? DistrictId { get; set; }

        public int? SchoolId { get; set; }

        public int? FacultyId { get; set; }

        public bool IsAvailable { get; set; }

        //Navigation properties

        public ICollection<BeaconLocation>? Locations { get; set; }

        public ICollection<BeaconEvent>? Events { get; set; }
    }
}
