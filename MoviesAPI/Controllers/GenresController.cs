using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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
        [ResponseCache(Duration = 60)]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [ServiceFilter(typeof(ActionFilters))]
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
                //throw new ApplicationException();
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
