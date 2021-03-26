using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
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
        private readonly ApplicationDbContext dbContext;
        private readonly IMapper mapper;

        public GenresController(IRepository repository, ILogger<GenresController> logger, ApplicationDbContext dbContext, IMapper mapper)
        {
            this.repository = repository;
            this.logger = logger;
            this.dbContext = dbContext;
            this.mapper = mapper;
        }


        [HttpGet]
        [HttpGet("list")]
        [HttpGet("/allgenres")]
        [ResponseCache(Duration = 60)]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [ServiceFilter(typeof(ActionFilters))]
        public async Task<ActionResult<List<GenreDTO>>> Get()
        {
            this.logger.LogInformation("Getting all genres");
            var genres = await dbContext.Genres.ToListAsync();

            return mapper.Map<List<GenreDTO>>(genres);
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
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO) {
            var genre = mapper.Map<Genre>(genreCreationDTO);
            dbContext.Add(genre);
            await dbContext.SaveChangesAsync();
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
