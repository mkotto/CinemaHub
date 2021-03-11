using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Entities;
using System.Collections.Generic;

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
        public List<Genre> Get()
        {
            return repository.GetAllGenres();
        }

        public Genre GetById(int Id)
        {
            var genre = repository.GetById(Id);
            if(genre == null)
            {
                //return NotFound();
            }
            return genre;
        }
        [HttpPost]
        public void Post() { }
        [HttpPut]
        public void Put() { }
        [HttpDelete]
        public void Delte() { }
    }
}
