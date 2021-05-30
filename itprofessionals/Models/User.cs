using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Itprofessionals.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Company { get; set; }
        public string Experience { get; set; }
        public string Technology { get; set; }
        public string Email { get; set; }
    }
}
