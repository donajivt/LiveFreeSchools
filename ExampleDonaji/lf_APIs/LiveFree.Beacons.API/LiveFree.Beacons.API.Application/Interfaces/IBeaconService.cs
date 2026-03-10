
using LiveFree.Beacons.API.Application.Dtos;
using LiveFree.Beacons.API.Domain.Entities;

namespace LiveFree.Beacons.API.Application.Interfaces
{
    public interface IBeaconService
    {
        Task<IEnumerable<BeaconDto>> GetAllAsync();
        Task<BeaconDto?> GetByIdAsync(int id);
        Task<BeaconDto?> GetByDeviceNameAsync(string deviceName);
        Task CreateAsync(BeaconDto dto);
        Task<bool> DeleteAsync(int id);
        Task<bool> UpdateAsync(int id, BeaconDto dto);
        Task<IEnumerable<BeaconTypeDto>> GetAllTypesAsync();
        Task<BeaconTypeDto?> GetTypeByIdAsync(int id);
    }
}
