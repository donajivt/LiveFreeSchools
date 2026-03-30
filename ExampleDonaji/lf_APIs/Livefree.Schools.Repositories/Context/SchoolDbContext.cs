using Microsoft.EntityFrameworkCore;
using Livefree.Schools.Repositories.Entities;

namespace Livefree.Schools.Repositories.Context
{
    public class SchoolDbContext(DbContextOptions<SchoolDbContext> options) : DbContext(options)
    {
        public DbSet<BeaconEntity> Beacons { get; set; }
        public DbSet<BeaconLocationEntity> BeaconLocations { get; set; }
        public DbSet<BeaconEventEntity> BeaconEvents { get; set; }
    }
}
