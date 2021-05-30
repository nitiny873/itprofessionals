using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Itprofessionals.Models;

namespace Itprofessionals.OpeningsData
{
    public interface IOpeningsData
    {
        List<Opening> GetAllOpenings();

        Opening GetOpening(Guid Id);
        Opening AddOpening(Opening opening);

        Opening EditOpening(Opening opening);
        void DeleteOpening(Opening opening);

    }
}
