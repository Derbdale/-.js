(function(){
  var version = undefined;
  window['💩'] = {
    ieVersion: function() {
      if(version !== undefined){
        return version;
      }
      var ua = window.navigator.userAgent;

      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
        version = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
        return version;
      }

      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
        var rv = ua.indexOf('rv:');
        version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        return version;
      }

      var edge = ua.indexOf('Edge/');
      if (edge > 0) {
        version = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        return version;
      }
      version = false;
      return version;
    },
    isIE: function(){
      return this.ieVersion() !== false;
    }
  }
  if(window['💩'].isIE()){
    document.body.classList.add('💩');
  }
})();