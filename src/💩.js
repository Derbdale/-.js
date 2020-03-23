export default {
    "💩": {
        ieVersion: function() {
            let ua = window.navigator.userAgent;

            let msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            let trident = ua.indexOf('Trident/');
            if (trident > 0) {
                let rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            let edge = ua.indexOf('Edge/');
            if (edge > 0) {
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }
            return false;
        },
        isIE: function(){
            return this.ieVersion() !== false;
        }
    }
}