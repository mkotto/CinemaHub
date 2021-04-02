using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Filters
{
    public class ActionFilter : IActionFilter
    {
        private readonly ILogger<ActionFilter> logger;

        public ActionFilter(ILogger<ActionFilter> logger)
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
