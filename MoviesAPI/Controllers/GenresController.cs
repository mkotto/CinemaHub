using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MoviesAPI.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly IRepository repository;

        public GenresController(IRepository repository)
        {
            this.repository = repository;
        }


        [HttpGet]
        [HttpGet("list")]
        [HttpGet("/allgenres")]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            return await repository.GetAllGenres();
        }

        [HttpGet("{id:int}/{param2=name}")]
        [HttpGet("{id:int}")]//api/genres/get
        public ActionResult<Genre> GetById(int Id, [FromServices] string param)
        {
            var genre = repository.GetById(Id);
            if (genre == null)
            {
                return NotFound();
            }
            return genre;
        }

        //[HttpGet("{id:int}")]//api/genres/get
        //public IActionResult GetById(int Id)
        //{
        //    var genre = repository.GetById(Id);
        //    if (genre == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(genre);
        //}
        [HttpPost]
        public ActionResult Post([FromBody] Genre genre) {
            repository.AddGenre(genre);
            return NoContent();
        }
        [HttpPut]
        public ActionResult Put([FromBody] Genre genre) {
            return NoContent();
        }
        [HttpDelete]
        public ActionResult Delete() {
            return NoContent();
        }
    }
}
