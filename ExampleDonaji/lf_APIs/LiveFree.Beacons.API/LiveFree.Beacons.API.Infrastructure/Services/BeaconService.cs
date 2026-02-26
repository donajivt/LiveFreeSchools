using AutoMapper;
using LiveFree.Beacons.API.Application.Dtos;
using LiveFree.Beacons.API.Application.Interfaces;
using LiveFree.Beacons.API.Domain.Entities;

namespace LiveFree.Beacons.API.Infrastructure.Services
{
    public class BeaconService : IBeaconService
    {
        private readonly IBeaconRepository _repository;
        private readonly IMapper _mapper;

        public BeaconService(IBeaconRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task CreateAsync(BeaconDto dto)
        {
            var entity = _mapper.Map<Beacon>(dto);

            await _repository.CreateAsync(entity);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var existing = await _repository.GetByIdAsync(id);

            if (existing == null)
                return false;

            await _repository.DeleteAsync(id);
            return true;
        }

        public async Task<IEnumerable<BeaconDto>> GetAllAsync()
        {
            var beacons = await _repository.GetAllAsync();

            return _mapper.Map<IEnumerable<BeaconDto>>(beacons);
        }

        public async Task<BeaconDto?> GetByIdAsync(int id)
        {
            var beacon = await _repository.GetByIdAsync(id);

            if (beacon == null)
                return null;

            return _mapper.Map<BeaconDto>(beacon);
        }

        public async Task<BeaconDto?> GetByDeviceNameAsync(string deviceName)
        {
            var beacon = await _repository.GetByDeviceNameAsync(deviceName);

            if (beacon == null)
                return null;

            return _mapper.Map<BeaconDto>(beacon);
        }

        public async Task<bool> UpdateAsync(int id, BeaconDto dto)
        {
            var existing = await _repository.GetByIdAsync(id);

            if (existing == null)
                return false;

            _mapper.Map(dto, existing);

            await _repository.UpdateAsync(existing);

            return true;
        }
    }
}