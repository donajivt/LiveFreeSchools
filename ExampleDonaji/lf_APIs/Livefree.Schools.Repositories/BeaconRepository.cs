using Livefree.Schools.Common.Mapper;
using Livefree.Schools.Models;
using Livefree.Schools.Repositories.Context;
using Livefree.Schools.Repositories.Entities;
using Microsoft.EntityFrameworkCore;

namespace Livefree.Schools.Repositories
{
    public interface IBeaconRepository : IBaseRepository<Guid, BeaconModel> {}

    public class BeaconRepository (
        SchoolDbContext context,
        IMapper<BeaconEntity,BeaconModel> mapper) : 
        BaseRepository<Guid,BeaconModel, BeaconEntity>(context, mapper),
        IBeaconRepository
    {
    }
}
