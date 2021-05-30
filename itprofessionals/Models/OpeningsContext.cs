using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Itprofessionals.Models
{
    public class OpeningsContext:DbContext
    {
        public OpeningsContext(DbContextOptions<OpeningsContext> options) : base(options) { }
        public DbSet<Opening> Openings { get; set; }
    }
    
}
