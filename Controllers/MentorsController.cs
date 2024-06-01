using godfidence.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
namespace godfidence.Controllers;
[Route("api/mentor")]
[ApiController]
public class MentorsController : ControllerBase
{
   private readonly Mentor[] _mentors =
   [
       new Mentor()
           { Id = 1, Name = "Ivan", Expertise = "Rehabilitation", Description = "God saved me in x year from y." }
   ];

   [HttpGet]
   public IActionResult GetAllMentors()
   {
       var response = new { Mentors = _mentors }; // Encapsulate the mentors array in an object
       return Ok(JsonSerializer.Serialize(response)); // Return the response object as a JSON string
   }
}
