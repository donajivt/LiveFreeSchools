using LiveFree.Beacons.API.Application.Interfaces;
using LiveFree.Beacons.API.Domain.Entities;
using LiveFree.Beacons.API.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace LiveFree.Beacons.API.Infrastructure.Repositories
{
    public class BeaconRepository : IBeaconRepository
    {
        private readonly AppDbContext _context;

        public BeaconRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(Beacon beacon)
        {
            await _context.Beacons.AddAsync(beacon);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            await _context.Beacons
                .Where(b => b.Id == id)
                .ExecuteDeleteAsync();
        }

        public async Task<bool> UpdateAsync(int id, Beacon dto)
        {
            var affectedRows = await _context.Beacons
               .Where(b => b.Id == id)
               .ExecuteUpdateAsync(b => b
                   .SetProperty(p => p.DeviceName, dto.DeviceName)
                   .SetProperty(p => p.BeaconType, dto.BeaconType)
                   .SetProperty(p => p.PhoneNumber, dto.PhoneNumber)
                   .SetProperty(p => p.DistrictId, dto.DistrictId)
                   .SetProperty(p => p.SchoolId, dto.SchoolId)
                   .SetProperty(p => p.FacultyId, dto.FacultyId)
                   .SetProperty(p => p.IsAvailable, dto.IsAvailable)
               );
            return affectedRows > 0;
        }

        public async Task<Beacon?> GetByIdAsync(int id)
        {
            return await _context.Beacons
                .Include(b => b.BeaconTypeNavigation)
                .Include(b => b.Locations)
                .Include(b => b.Events)
                .FirstOrDefaultAsync(b => b.Id == id);
        }
        public async Task<BeaconType?> GetTypeByIdAsync(int id)
        {
            return await _context.BeaconTypes
                .FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task<IEnumerable<Beacon>> GetAllAsync()
        {
            return await _context.Beacons
                .Include(b => b.BeaconTypeNavigation)
                .Include(b => b.Locations)
                .Include(b => b.Events)
                .ToListAsync();
        }
        public async Task<IEnumerable<BeaconType>> GetAllTypesAsync()
        {
            return await _context.BeaconTypes
                .ToListAsync();
        }

        public async Task<Beacon?> GetByDeviceNameAsync(string deviceName)
        {
            return await _context.Beacons
               .Include(b => b.BeaconTypeNavigation)
               .Include(b => b.Locations)
               .Include(b => b.Events)
               .FirstOrDefaultAsync(b => b.DeviceName == deviceName);
        }
    }
}