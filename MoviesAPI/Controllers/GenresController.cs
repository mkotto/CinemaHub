using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using MoviesAPI.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using MoviesAPI.DTOs;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    //[Route("api/[controller]")]
    [ApiController]
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

        [HttpGet] // api/genres
        [HttpGet("list")] // api/genres/list
        [HttpGet("/allgenres")] // allgenres
        //[ResponseCache(Duration = 60)]
        [ServiceFilter(typeof(ActionFilter))]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            logger.LogInformation("Getting all the genres");

            return await repository.GetAllGenres();
        }

        [HttpGet("{Id:int}", Name = "getGenre")] // api/genres/example
        [ServiceFilter(typeof(ActionFilter))]
        public ActionResult<Genre> Get(int Id, string param2)
        {
            logger.LogDebug("get by Id method executing...");

            var genre = repository.GetById(Id);

            if (genre == null)
            {
                logger.LogWarning($"Genre with Id {Id} not found");
                logger.LogError("this is an error");
                //throw new ApplicationException();
                return NotFound();
            }

            //return Ok(2);
            //return "felipe";
            return genre;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO)
        {
            var genre = mapper.Map<Genre>(genreCreationDTO);
            dbContext.Add(genre);
            await dbContext.SaveChangesAsync();
            return NoContent();
        }


        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] GenreCreationDTO genreCreationDTO)
        {
            var genre = mapper.Map<Genre>(genreCreationDTO);
            genre.Id = id;
            this.dbContext.Entry(genre).State = EntityState.Modified;
            await this.dbContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var genre = await dbContext.Genres.FirstOrDefaultAsync(x => x.Id == id);
            if(genre == null)
            {
                return NotFound();
            }

            dbContext.Remove(genre);
            await dbContext.SaveChangesAsync();
            return NoContent();
        }
    }
}
