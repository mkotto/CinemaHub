using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Filters
{
    public class ActionFilters : IActionFilter
    {
        private readonly ILogger<ActionFilters> logger;

        public ActionFilters(ILogger<ActionFilters> logger)
        {
            this.logger = logger;
        }
        public void OnActionExecuted(ActionExecutedContext context)
        {
            logger.LogWarning("OnActionExecuted is performed");
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            logger.LogWarning("OnActionExecuting is performed");
        }
    }
}
