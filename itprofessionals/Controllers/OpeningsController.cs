using Itprofessionals.OpeningsData;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Itprofessionals.Models;
using Microsoft.AspNetCore.Cors;

namespace Itprofessionals.Controllers
{
    
    [ApiController]
    public class OpeningsController : ControllerBase
    {
        private IOpeningsData _openingsData;
        public OpeningsController(IOpeningsData openingsData)
        {
            _openingsData = openingsData;
        }

        
        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult AddOpening(Opening opening)
        {
            _openingsData.AddOpening(opening);
            // return Created(opening.NameOfCompany,opening);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + opening.Id, opening);
        }

        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult GetAllOpenings()
        {
           var openings= _openingsData.GetAllOpenings();
            // return Created(opening.NameOfCompany,opening);
            return Ok(openings);
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public IActionResult GetOpening(Guid Id)
        {
         var opening=   _openingsData.GetOpening(Id);
            // return Created(opening.NameOfCompany,opening);
            return Ok(opening);
        }

        [HttpDelete]
        [Route("api/[controller]/{id}")]
        public IActionResult DeleteOpening(Guid Id)
        {
          var opening=  _openingsData.GetOpening(Id);
            if(opening!=null)
            {
                _openingsData.DeleteOpening(opening);
                return Ok();
            }
            // return Created(opening.NameOfCompany,opening);
            return Ok("Opening Not Found");
        }

        [HttpPatch]
        [Route("api/[controller]/{id}")]
        public IActionResult EditOpening(Guid Id,Opening opening)
        {
            var updateopening = _openingsData.GetOpening(Id);
            if (updateopening != null)
            {
                opening.Id = updateopening.Id;
                _openingsData.EditOpening(opening);
                return Ok(opening);
            }
            // return Created(opening.NameOfCompany,opening);
            return Ok("Opening Not Found");

        }
    }
}
