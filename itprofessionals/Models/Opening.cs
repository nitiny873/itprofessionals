using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Itprofessionals.Models
{
    public class Opening
    {   [Key]
        public Guid Id { get; set; }
        public string NameOfCompany { get; set; }
        public string Description { get; set; }
        public string Experience { get; set; }
        public string NoticePeriod { get; set; }
        public string CTC { get; set; }

    }
}
