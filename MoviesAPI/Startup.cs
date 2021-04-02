using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using MoviesAPI.Services;
using System.IO;

namespace MoviesAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //AddPolicy("AllowOrigin", options => options.AllowAnyOrigin());
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddCors(
                    options =>
                    {
                        options.AddDefaultPolicy( builders => {
                            var frontendURL = Configuration.GetValue<string>("frontend_url");
                            builders.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
                        });
                        options.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin());
                    }
                );
            services.AddAutoMapper(typeof(Startup));
            services.AddControllers(
                    options =>
                    {
                        options.Filters.Add(typeof(CustomExceptionFilter));
                    }
                );
            services.AddMemoryCache();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
            //services.AddMvcCore();
            services.AddSingleton<IRepository, InMemoryRepository>();
            services.AddTransient<ActionFilters>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(
                    x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
                );
            app.UseHttpsRedirection();
            app.UseResponseCaching();

            app.UseAuthorization();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
