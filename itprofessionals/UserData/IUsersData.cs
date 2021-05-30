using Itprofessionals.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Itprofessionals.UserData
{
   public interface IUsersData
    {
        public List<User> GetUsers();

        public User AddUser(User user);

        public User GetUserByName(string  name);
        public User GetUser(Guid Id);

    }
}
