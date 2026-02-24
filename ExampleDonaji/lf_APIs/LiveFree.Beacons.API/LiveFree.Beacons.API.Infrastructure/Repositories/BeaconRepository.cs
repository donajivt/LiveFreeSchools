using LiveFree.Beacons.API.Application.Interfaces;
using LiveFree.Beacons.API.Domain.Entities;
using LiveFree.Beacons.API.Infrastructure.Persistence;

namespace LiveFree.Beacons.API.Infrastructure.Repositories
{
    public class BeaconRepository : IBeaconRepository
    {
        private readonly AppDbContext _context;

        public BeaconRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task SaveAsync(Beacon beacon)
        {
        }

        public async Task<List<Beacon>> GetByUserAsync(string userId)
        {
        }
    }
}