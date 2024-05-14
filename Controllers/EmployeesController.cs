using godfidence.Models;
using Microsoft.AspNetCore.Mvc;

namespace godfidence.Controllers;

[Route("api/employee")]
[ApiController]
public class EmployeesController : ControllerBase
{
    private Employee[] _employees = new Employee[]
    {
        new Employee { Id = 1, Name = "Mark", JoiningDate = DateTime.Parse(DateTime.Today.ToString()), Age = 12 }
    };
    
    [HttpGet]
    public IEnumerable<Employee> GetAllEmployees(){
        return _employees;
    }
    
    [HttpGet("{id}")]
    public IActionResult GetEmployee([FromRoute] int id)
    {
        var employee = _employees.FirstOrDefault((p) => p.Id == id);
        if (employee == null)
        {
            return NotFound();
        }

        return Ok(employee);
    }
}