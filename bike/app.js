//app.js
import api from 'api/index.js'
App({
  onLaunch: function(options) {
    // Do something initial when launch.
  },
  onShow: function(options) {
      // Do something when show.
  },
  onHide: function() {
      // Do something when hide.
  },
  onError: function(msg) {
    console.log(msg)
  },
  showToast(msg, duration) {
    toast.showToast(msg, duration)
  },
$api: api,
  globalData: 'I am global data'
})

