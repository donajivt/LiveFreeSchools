namespace LiveFree.Beacons.API.Application.Dtos
{
    public class BeaconDto
    {
        public int Id { get; set; }

        public string DeviceName { get; set; } = string.Empty;

        public string BeaconType { get; set; } = string.Empty;

        public long PhoneNumber { get; set; }

        public int? DistrictId { get; set; }

        public int? SchoolId { get; set; }

        public int? FacultyId { get; set; }

        public bool IsAvailable { get; set; }

        public List<BeaconLocationDto>? Locations { get; set; }

        public List<BeaconEventDto>? Events { get; set; }
    }
}
