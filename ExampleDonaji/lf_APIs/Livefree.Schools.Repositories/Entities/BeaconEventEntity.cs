namespace Livefree.Schools.Repositories.Entities
{
    public class BeaconEventEntity
    {
        public long Id { get; set; }
        public Guid BeaconId { get; set; }
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

        public BeaconEntity Beacon { get; set; } = null!;
    }
}
