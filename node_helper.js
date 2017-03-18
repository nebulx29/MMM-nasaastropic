/* Magic Mirror
 * Module: MMM-nasaastropic
 *
 * By Juergen Wolf-Hofer
 * Apache 2.0 Licensed.
 */

const NodeHelper = require('node_helper');
var async = require('async');
const request = require('request');
const cheerio = require("cheerio");

// Constants
const URL = "https://apod.nasa.gov/apod/astropix.html";
const IMG_PREFIX = "https://apod.nasa.gov/apod/";

module.exports = NodeHelper.create({

  start: function() {
    console.log('Starting node helper: ' + this.name);
  },

  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    if (notification === 'CONFIG') {
		console.log('astro helper: config received');
		var self = this;
		this.config = payload;
		self.retrieveAndUpdate();
		setInterval(function() {
			console.log("astro helper retrieveAndUpdate()");
			self.retrieveAndUpdate();
		}, this.config.updateInterval);
    }
  },

  retrieveAndUpdate: function() {
	var self = this;
	console.log('retrieveAndUpdate()');

	request(URL, function (err, response, html) {
		let $ = cheerio.load(html);
		var img_src = IMG_PREFIX + $('img').attr('src');
		console.log("NASA Astro Pic of the Day URL: " + img_src);
		self.sendSocketNotification('URL', img_src);
	});
	
  }

});

