using System.Collections.Generic;
using MoviesAPI.Entities;
namespace MoviesAPI.Services
{
  public class InMemoryRepository
  {
    private List<Genre> _genres;
    public InMemoryRepository()
    {
      _genres = new List<Genre>()
      {
        new Genre() {Id=1, Name="Comedy"},
        new Genre() {Id=2, Name="Drama"}

      };
    }

    public List<Genre> GetAllGenres()
    {
      return _genres;
    }
  }
}
