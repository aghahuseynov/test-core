using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AntDesign.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpGet("[action]")]
        public IActionResult GetAllUser()
        {
            List<User> user = new List<User>();

            for (int i = 0; i < 100; i++)
            {
                user.Add(new User
                {
                    Age = i + 10,
                    Name = "Agha" + i.ToString(),
                    Surname = "Huseynov" + i.ToString(),
                    Number = i

                });
            }


            return Ok(user);
        }

    }

    public class User
    {
        public int Number { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }

    }
}
