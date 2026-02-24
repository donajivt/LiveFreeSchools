using LiveFree.Beacons.API.Domain.Entities;

namespace LiveFree.Beacons.API.Application.Interfaces
{
    public interface IBeaconRepository
    {
        Task SaveAsync(Beacon beacon);
        Task<List<Beacon>> GetByUserAsync(string userId);
    }
}
