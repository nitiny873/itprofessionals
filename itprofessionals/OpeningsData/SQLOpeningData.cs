using Itprofessionals.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Itprofessionals.OpeningsData
{
    public class SQLOpeningData : IOpeningsData
    {
        public OpeningsContext _openingsContext;
        public SQLOpeningData(OpeningsContext openingContext)
        {
            _openingsContext = openingContext;
        }
        public Opening AddOpening(Opening opening)
        {
            opening.Id = new Guid();
            _openingsContext.Openings.Add(opening);
            _openingsContext.SaveChanges();
            return opening;
            //throw new NotImplementedException();
        }

        public void DeleteOpening(Opening opening)
        {
            _openingsContext.Openings.Remove(opening);
            _openingsContext.SaveChanges();
          //  throw new NotImplementedException();
        }

        public Opening EditOpening(Opening opening)
        {
            var updatedopening = _openingsContext.Openings.Find(opening.Id);
            if(updatedopening!=null)
            {
                updatedopening.NameOfCompany = opening.NameOfCompany;
                updatedopening.Description = opening.Description;
                updatedopening.Experience = opening.Experience;
                updatedopening.NoticePeriod  = opening.NoticePeriod;
                updatedopening.CTC = opening.CTC;

                _openingsContext.Openings.Update(updatedopening);
                _openingsContext.SaveChanges();
            }
            return updatedopening;
            // throw new NotImplementedException();
        }

        public List<Opening> GetAllOpenings()
        {
           return _openingsContext.Openings.ToList();
          //  _openingsContext.SaveChanges();

        //    throw new NotImplementedException();
        }

        public Opening GetOpening(Guid Id)
        {
           var opening= _openingsContext.Openings.Find(Id);
            _openingsContext.SaveChanges();
            return opening;
            //            throw new NotImplementedException();
        }
    }
}
