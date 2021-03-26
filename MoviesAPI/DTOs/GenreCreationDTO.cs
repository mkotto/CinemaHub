using MoviesAPI.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.DTOs
{
    public class GenreCreationDTO
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "The field with name {0} is required")]
        [MinLength(3)]
        [MaxLength(20)]
        [FirstLetterUppercase]
        public string Name { get; set; }
    }
}
