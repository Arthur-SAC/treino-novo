var TimerEngine = {
  interval: null,

  start: function(seconds, onTick, onDone) {
    this.stop();
    var remaining = seconds;
    if (onTick) onTick(remaining);
    this.interval = setInterval(function() {
      remaining--;
      if (onTick) onTick(remaining);
      if (remaining <= 0) {
        TimerEngine.stop();
        if (onDone) onDone();
      }
    }, 1000);
  },

  stop: function() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
};
