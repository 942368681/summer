/* 日期插件调用 */
;
(function(UM){
    var _picker = function(selector,json){
        this.defaults = {
            theme: "ios7",
            mode: "scroller",
            display: "bottom",
            animate: ""     
        };
        this.initmobscroll(selector,json);
    }
    _picker.prototype.initmobscroll = function(selector,json){
        var options = $.extend(json,this.defaults);
        $(selector).scroller('destroy').scroller(options);
    }
    UM.picker = function(selector,json) {
        return new _picker(selector,json);
    }
})(UM)
