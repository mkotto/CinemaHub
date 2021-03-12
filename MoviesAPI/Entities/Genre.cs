using MoviesAPI.Validations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
  public class Genre : IValidatableObject
  {
    public int Id { get; set; }
    [Required(ErrorMessage = "The field with name {0} is required")]
    [MinLength(3)]
    [MaxLength(20)]
    //[FirstLetterUppercase]
    public string Name { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if (!string.IsNullOrEmpty(Name))
            {
                var firstLetter = Name[0].ToString();
                if(firstLetter != firstLetter.ToUpper())
                {
                    yield return new ValidationResult("First letter must be uppercase", new string[] { nameof(Name) });
                }
            }
        }
    }
}
