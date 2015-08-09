using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Practices.Unity;

namespace ClientBuild.Infrastructure
{
    public class ControllerFactory: DefaultControllerFactory
    {
	    private readonly IUnityContainer _container;

	    public ControllerFactory(IUnityContainer container, 
			IControllerActivator controllerActivator)
			:base(controllerActivator)
	    {
		    _container = container;
	    }

	    public override object CreateController(ActionContext actionContext)
	    {
			var actionDescriptor = actionContext.ActionDescriptor as ControllerActionDescriptor;
			if (actionDescriptor == null)
			{
				throw new ArgumentException(
					"Format action descriptor must be based on controller action: " +
						typeof(ControllerActionDescriptor),
					nameof(actionContext));
			}

			var controllerType = actionDescriptor.ControllerTypeInfo.AsType();

		    var controller = _container.Resolve(controllerType);

		    return controller;
		}
    }
}
