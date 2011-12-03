/**
 * @fileOverview This file contains the functions necessary to manipulate the localStorage object. 
 * @author <a href="mailto:Rodolfo.Puig@nbcuni.com">Rodolfo Puig</a>
 * @version $Id: storage.js 550 2011-10-12 15:23:58Z rpuig $
 */

/**
 * Retrieves the given key from the localStorage object.
 * 
 * @param {String} key The key to load the data from.
 * @type Object
 * 
 * @function
 */
storage_get = function(key) {
	var json = localStorage.getItem(key);
	if (json == null) {
		return undefined;
	} else {
		try {
			return JSON.parse(json);
		} catch (e) {
			console.log("Couldn't parse json for " + key);
			return undefined;
		}
	}
};

/**
 * Stores the given value in the localStorage object.
 * 
 * @param {String} key The key to store the data under.
 * @param [value] The value to send to localStorage.
 * 
 * @function
 */
storage_set = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};
