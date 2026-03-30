using Livefree.Schools.Models;
using Livefree.Schools.Services;

namespace Livefree.Schools.Host.Endpoints
{
    public interface IBeaconEndpoint
    {
        Task<ICollection<BeaconModel>> GetAllAsync(string? where);
        Task<BeaconModel> GetAsync(Guid id);
        Task<BeaconModel> CreateAsync(BeaconModel model);
        Task<BeaconModel> UpdateAsync(Guid id, BeaconModel model);
        Task DeleteAsync(Guid id);
    }
    public class BeaconEndpoint(
        IBeaconService beaconService) : IBeaconEndpoint
    {
        public Task<BeaconModel> CreateAsync(BeaconModel model) => beaconService.CreateAsync(model);
        public Task DeleteAsync(Guid id)=> beaconService.DeleteAsync(id);
        public Task<ICollection<BeaconModel>> GetAllAsync(string? where) => beaconService.GetAllAsync(where);
        public Task<BeaconModel> GetAsync(Guid id) => beaconService.GetByIdAsync(id);
        public Task<BeaconModel> UpdateAsync(Guid id, BeaconModel model) => beaconService.UpdateAsync(id, model);
    }
}
