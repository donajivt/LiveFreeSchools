namespace Livefree.Schools.Models
{
    public class BeaconModel
    {
        public Guid Id { get; set; }
        public string DeviceName { get; set; } = string.Empty;
        public int BeaconTypeId { get; set; } = 1;
        public string PhoneNumber { get; set; } = string.Empty;
        public long? DistrictId { get; set; }
        public long? SchoolId { get; set; }
        public long? FacultyId { get; set; }
        public bool IsAvailable { get; set; }

        public List<BeaconLocationModel>? Locations { get; set; }
        public List<BeaconEventModel>? Events { get; set; }
    }
}
