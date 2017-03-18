/* Magic Mirror
 * Module: MMM-nasaastropic
 *
 * By Juergen Wolf-Hofer
 * Apache Licensed.
 */

Module.register('MMM-nasaastropic', {

  defaults: {
    updateInterval: 6 * 60 * 60 * 1000,
    animationSpeed: 0,
	header: 'NASA Astronomy Picture',
	maxlongedge: 600
  },

    getStyles: function () {
        return ["MMM-nasaastropic.css"];
    },  
  
  // Define start sequence
  start: function() {
    Log.log('Starting module: ' + this.name);
    this.sendSocketNotification('CONFIG', this.config);
  },

  socketNotificationReceived: function(notification, payload) {
    Log.log('MMM-nasaastropic: socketNotificationReceived ' + notification);
    //Log.log(payload);
    if (notification === 'URL') {
		this.img_src = payload;
		this.updateDom(this.config.animationSpeed);
    }
  },

  // Override dom generator.
  getDom: function() {
	var wrapper = document.createElement('div');
	var header = document.createElement("header");
	var name = document.createElement("span");
    name.innerHTML = "" + this.config.header;
    header.appendChild(name);
	wrapper.appendChild(header);
	
	var imgContainer = document.createElement('div');
	imgContainer.style.width = 500;
	imgContainer.style.height = 500;
	imgContainer.style.background = gray;
	wrapper.appendChild(imgContainer);

	var img = document.createElement('img');
	img.style.maxwidth = '100%';
	img.style.height = 'auto';
	img.src = this.img_src;
	imgContainer.appendChild(img);

	return wrapper;
  },
});
