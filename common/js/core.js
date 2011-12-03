/**
 * @fileOverview This file contains the core functions used on all extension objects.
 * @author <a href="mailto:Rodolfo.Puig@nbcuni.com">Rodolfo Puig</a>
 * @version $Id: core.js 550 2011-10-12 15:23:58Z rpuig $
 */

/**
 * Routes and executes a command in the background object.
 * 
 * @function
 */
core_execute = function() {
	var args = [];
	for (var i=0; i<arguments.length; i++) {
		args.push(arguments[i]);
	}
	var fn = args.shift();
	var has_callback = (typeof args[args.length - 1] == "function");
	var callback = (has_callback ? args.pop() : function(){});
	chrome.extension.sendRequest({command: "execute", fn:fn, args:args}, callback);
};
