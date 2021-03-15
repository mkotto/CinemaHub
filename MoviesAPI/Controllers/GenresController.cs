using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
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
        private readonly ILogger<GenresController> logger;

        public GenresController(IRepository repository, ILogger<GenresController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }


        [HttpGet]
        [HttpGet("list")]
        [HttpGet("/allgenres")]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            this.logger.LogInformation("Getting all genres");
            return await repository.GetAllGenres();
        }

        //[HttpGet("{id:int}/{param2=name}")]
        //[HttpGet("{id:int}")]//api/genres/get
        [HttpGet("{Id:int}", Name = "getGenre")]
        public ActionResult<Genre> GetById(int Id, string param)
        {
            logger.LogDebug("getById method is executing");
            var genre = repository.GetById(Id);
            if (genre == null)
            {
                this.logger.LogWarning($"Genre Id {Id} is not found");
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
