using System.ComponentModel.DataAnnotations;

namespace MyApi.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string? Name { get; set; } // Nullable

        [Required]
        [EmailAddress]
        [MaxLength(255)]
        public string? Email { get; set; } // Nullable

        [Required]
        [MaxLength(255)]
        public string? PasswordHash { get; set; } // Nullable

        [MaxLength(255)]
        public string? Role { get; set; } // Nullable

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}
