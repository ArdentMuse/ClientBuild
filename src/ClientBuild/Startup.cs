using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClientBuild.Infrastructure;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Mvc;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Practices.Unity;

namespace ClientBuild
{
    public class Startup
    {
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
			// Add MVC services to the services container.
			services.AddMvc();

			/*var container = new UnityContainer();
	        container.AddExtension(new EnumerableResolutionExtension());

	        services.AddSingleton<IUnityContainer, UnityContainer>();
			
	        services.AddTransient<IControllerFactory, ControllerFactory>();*/
        }

        public void Configure(IApplicationBuilder app)
        {
			app.UseStaticFiles();
			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller}/{action}/{id?}",
					defaults: new { controller = "Home", action = "Index" });

				// Uncomment the following line to add a route for porting Web API 2 controllers.
				// routes.MapWebApiRoute("DefaultApi", "api/{controller}/{id?}");
			});
		}
    }
}
