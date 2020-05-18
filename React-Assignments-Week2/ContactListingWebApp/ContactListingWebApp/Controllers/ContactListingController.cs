using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactListingWebApp.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactListingWebApp.Controllers
{
    [Route("api/[controller]")]
    public class ContactListingController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            List<ContactList> contactLists = new List<ContactList>();
            contactLists.Add(new ContactList { Name = "Vishnu Rajendran", Email = "vrajendran@suyati.com" });
            contactLists.Add(new ContactList { Name = "Praphul N", Email = "pnangeelil@suyati.com" });
            contactLists.Add(new ContactList { Name = "Shamnad V A", Email = "sabdul@suyati.com" });
            return Ok(contactLists);
        }
    }
}
