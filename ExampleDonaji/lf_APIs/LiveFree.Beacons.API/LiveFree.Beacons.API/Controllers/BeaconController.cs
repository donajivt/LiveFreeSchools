using LiveFree.Beacons.API.Application.Dtos;
using LiveFree.Beacons.API.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace LiveFree.Beacons.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BeaconController : ControllerBase
    {
        private readonly IBeaconService _service;

        public BeaconController(IBeaconService service)
        {
            _service = service;
        }

        // Get All Beacons
        [HttpGet]
        [Authorize(Roles = "ADMINISTRATOR,USER,FACULTY,CHAPERONE,SCHOOL,DISTRICT")]
        public async Task<IActionResult> GetAll()
        {
            var response = new ResponseDto();

            try
            {
                var result = await _service.GetAllAsync();

                response.Result = result;
                response.Message = "Beacons retrieved successfully.";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
                return StatusCode(500, response);
            }
        }

        // Get Beacon by ID
        [HttpGet("{id:int}")]
        [Authorize(Roles = "ADMINISTRATOR,USER,FACULTY,CHAPERONE,SCHOOL,DISTRICT")]
        public async Task<IActionResult> GetById(int id)
        {
            var response = new ResponseDto();

            try
            {
                var beacon = await _service.GetByIdAsync(id);

                if (beacon == null)
                {
                    response.IsSuccess = false;
                    response.Message = "Beacon not found.";
                    return NotFound(response);
                }

                response.Result = beacon;
                response.Message = "Beacon retrieved successfully.";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
                return StatusCode(500, response);
            }
        }

        // Get Beacon by Device Name
        [HttpGet("device/{deviceName}")]
        [Authorize(Roles = "ADMINISTRATOR,USER,FACULTY,CHAPERONE,SCHOOL,DISTRICT")]
        public async Task<IActionResult> GetByDeviceName(string deviceName)
        {
            var response = new ResponseDto();

            try
            {
                var beacon = await _service.GetByDeviceNameAsync(deviceName);

                if (beacon == null)
                {
                    response.IsSuccess = false;
                    response.Message = "Beacon not found.";
                    return NotFound(response);
                }

                response.Result = beacon;
                response.Message = "Beacon retrieved successfully.";

                return Ok(response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = $"Error retrieving beacon: {ex.Message}";
                return StatusCode(500, response);
            }
        }

        // Create Beacon - Only for ADMINISTRATOR role
        [HttpPost]
        [Authorize(Roles = "ADMINISTRATOR")]
        public async Task<IActionResult> Create([FromBody] BeaconDto dto)
        {
            var response = new ResponseDto();

            try
            {
                await _service.CreateAsync(dto);

                response.Result = dto;
                response.Message = "Beacon created successfully.";

                return StatusCode(201, response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
                return StatusCode(500, response);
            }
        }

        // Update Beacon - Only for ADMINISTRATOR role
        [HttpPut("{id:int}")]
        [Authorize(Roles = "ADMINISTRATOR")]
        public async Task<IActionResult> Update(int id, [FromBody] BeaconDto dto)
        {
            var response = new ResponseDto();

            try
            {
                var success = await _service.UpdateAsync(id, dto);

                if (!success)
                {
                    response.IsSuccess = false;
                    response.Message = "Beacon not found.";
                    return NotFound(response);
                }

                response.Message = "Beacon updated successfully.";
                response.Result = dto;

                return Ok(response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = $"Error updating beacon: {ex.Message}";
                return StatusCode(500, response);
            }
        }

        //Delete Beacon - Only for ADMINISTRATOR role
        [HttpDelete("{id:int}")]
        [Authorize(Roles = "ADMINISTRATOR")]
        public async Task<IActionResult> Delete(int id)
        {
            var response = new ResponseDto();

            try
            {
                var success = await _service.DeleteAsync(id);

                if (!success)
                {
                    response.IsSuccess = false;
                    response.Message = "Beacon not found.";
                    return NotFound(response);
                }

                response.Message = "Beacon deleted successfully.";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = $"Error deleting beacon: {ex.Message}";
                return StatusCode(500, response);
            }
        }

        [HttpGet("debug")]
        [Authorize]
        public IActionResult DebugClaims()
        {
            var claims = User.Claims.Select(c => new { c.Type, c.Value });
            return Ok(claims);
        }
    }
}