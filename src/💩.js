export default {
    "💩": {
        ieVersion: _ => {
            let ua = window.navigator.userAgent,
            msie = ua.indexOf("MSIE "),
            trident = ua.indexOf("Trident/"),
            edge = ua.indexOf('Edge/');;

            if(msie > 0 ) return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            if(trident > 0) { let rv = ua.indexOf("rv:"); return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10); }
            if (edge > 0) return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            return null;
        },
        isIE: _ => {
            return this.ieVersion() !== false;
        }
    }
}
