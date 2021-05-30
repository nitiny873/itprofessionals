using Itprofessionals.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Itprofessionals.UserData
{
    public class SQLUsersData : IUsersData
    {
       public UsersContext _userContext;
        public SQLUsersData(UsersContext usersContext)
        {
            _userContext = usersContext;
        }
        public User AddUser(User user)
        {

         user.Id = new Guid();
            _userContext.Users.Add(user);
            _userContext.SaveChanges();
            return user;
            //throw new NotImplementedException();
        }

        public User GetUser(Guid Id)
        {
            var user=_userContext.Users.Find(Id);
            _userContext.SaveChanges();
            return user;
            //throw new NotImplementedException();
        }
        public User GetUserByName(String name)
        {
            //  var user = _userContext.Users.Find(name);
            var user =_userContext.Users.FirstOrDefault(x => x.Name == name);
            _userContext.SaveChanges();
            return user;
            //throw new NotImplementedException();
        }

        public List<User> GetUsers()
        {
            return _userContext.Users.ToList();
            //throw new NotImplementedException();
        }
    }
}
