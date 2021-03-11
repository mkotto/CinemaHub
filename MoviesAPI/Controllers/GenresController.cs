using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/[controller]")]
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
        public ActionResult<Genre> GetById(int Id)
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
        public ActionResult Post() {
            return NoContent();
        }
        [HttpPut]
        public ActionResult Put() {
            return NoContent();
        }
        [HttpDelete]
        public ActionResult Delte() {
            return NoContent();
        }
    }
}
