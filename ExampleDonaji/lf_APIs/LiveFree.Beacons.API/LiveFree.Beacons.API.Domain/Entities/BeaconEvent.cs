namespace LiveFree.Beacons.API.Domain.Entities
{
    public class BeaconEvent
    {
        public int Id { get; set; }

        public int BeaconId { get; set; }

        public string EmergencyType { get; set; } = string.Empty;

        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public string ReverseGeocode { get; set; } = string.Empty;

        public string Address1 { get; set; } = string.Empty;
        public string? Address2 { get; set; }
        public string? Address3 { get; set; }

        public string City { get; set; } = string.Empty;
        public string State { get; set; } = string.Empty;
        public string PostalCode { get; set; } = string.Empty;

        public DateTime CreatedOnUTC { get; set; }

        public string CreatedBy { get; set; } = string.Empty;

        public Beacon Beacon { get; set; } = null!;
    }
}