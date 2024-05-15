using godfidence.Models;
using Microsoft.AspNetCore.Mvc;

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
    public IEnumerable<Mentor> GetAllMentors()
    {
        return _mentors;
    }
}