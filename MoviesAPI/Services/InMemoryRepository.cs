using System.Collections.Generic;
using MoviesAPI.Entities;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace MoviesAPI.Services
{
  public class InMemoryRepository : IRepository
  {
    private List<Genre> _genres;
        private readonly ILogger<InMemoryRepository> logger;

        public InMemoryRepository(ILogger<InMemoryRepository> logger)
    {
      _genres = new List<Genre>()
      {
        new Genre() {Id=1, Name="Comedy"},
        new Genre() {Id=2, Name="Drama"},
        new Genre() {Id=3, Name="Sci-fi"}

      };
            this.logger = logger;
        }

    public async Task<List<Genre>> GetAllGenres()
    {
            this.logger.LogInformation("executing getAllGenres()");
            await Task.Delay(3000);
            return _genres;
    }

        public void AddGenre(Genre genre)
        {
            genre.Id = _genres.Max(x => x.Id) + 1;
            this._genres.Add(genre);
        }

        Genre IRepository.GetById(int id)
        {
            return _genres.FirstOrDefault(x => x.Id == id);
        }
    }
}
