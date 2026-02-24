namespace LiveFree.Beacons.API.Domain.Entities
{
    public class BeaconLocation
    {
        public int Id { get; set; }

        public int BeaconId { get; set; }

        public DateTime LocationDateUTC { get; set; }

        public string Street1 { get; set; } = string.Empty;
        public string? Street2 { get; set; }

        public string Locality { get; set; } = string.Empty;
        public string State { get; set; } = string.Empty;
        public string PostalCode { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;

        public string ReverseGeocode { get; set; } = string.Empty;

        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public string BatteryLevel { get; set; } = string.Empty;

        public Beacon Beacon { get; set; } = null!;
    }
}