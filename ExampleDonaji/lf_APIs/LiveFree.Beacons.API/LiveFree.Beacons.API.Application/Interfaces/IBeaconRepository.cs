using LiveFree.Beacons.API.Domain.Entities;

namespace LiveFree.Beacons.API.Application.Interfaces
{
    public interface IBeaconRepository
    {
        Task CreateAsync(Beacon beacon);
        Task DeleteAsync(int id);
        Task<bool> UpdateAsync(int id, Beacon dto);
        Task<Beacon> GetByIdAsync(int id);
        Task<Beacon?> GetByDeviceNameAsync(string deviceName);
        Task<IEnumerable<Beacon>> GetAllAsync();
    }
}
