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
    maxlongedge: 300
  },

    getStyles: function () {
        return ["nasaastropic.css"];
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
	
	/*var imgContainer = document.createElement('div');
	imgContainer.style.width = "500px";
	imgContainer.style.height = "500px";
	imgContainer.style.background = "gray";
	//imgContainer.innerHTML = this.img_src;
	wrapper.appendChild(imgContainer);*/

	var img = document.createElement('img');
	img.style = "max-width: " + this.config.maxlongedge + "px; max-height: " + this.config.maxlongedge + "px";
	img.src = this.img_src;
	img.alt = this.img_src;
	wrapper.appendChild(img);

	return wrapper;
  },
});
