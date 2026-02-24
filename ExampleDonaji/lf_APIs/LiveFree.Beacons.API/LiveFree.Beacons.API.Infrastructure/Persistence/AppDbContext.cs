
using LiveFree.Beacons.API.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace LiveFree.Beacons.API.Infrastructure.Persistence
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Beacon> Beacons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
