using Livefree.Schools.Models;
using Livefree.Schools.Repositories;

namespace Livefree.Schools.Services
{
    public interface IBeaconService : IBaseService<Guid, BeaconModel> { }

    public class BeaconService(IBeaconRepository beaconRepository) :
        BaseService<Guid, BeaconModel>(beaconRepository), IBeaconService
    {

    }
}
