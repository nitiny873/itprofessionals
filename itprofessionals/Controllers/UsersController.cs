using Itprofessionals.UserData;
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
    // [Route("api/[controller]")]
     [ApiController]
    public class UsersController : ControllerBase
    {
        private IUsersData _userdata;
        public UsersController(IUsersData userdata)
        {
            _userdata = userdata;
        }
        [HttpPost]
        [Route("api/[controller]")]
        public ActionResult AddUser(User user)
        {
            //   user.Id = new Guid();
            user = _userdata.AddUser(user);
            return Ok(user);
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public ActionResult GetUser(Guid id)
        {
            //   user.Id = new Guid();
             var user = _userdata.GetUser(id);
            return Ok(user);
        }

        [HttpGet]
        [Route("api/[controller]/getuser/{name}")]
        public ActionResult GetUserByName(String name)
        {
            //   user.Id = new Guid();
            var user = _userdata.GetUserByName(name);
            if(user!=null)
            return Ok(user);
            else
            {
                return Ok("UserNotFound");
            }
        }
        [HttpGet]
        [Route("api/[controller]")]
        public ActionResult GetUsers()
        {
            //   user.Id = new Guid();
          var users=_userdata.GetUsers();
            return Ok(users);
         
        }
    }
}
