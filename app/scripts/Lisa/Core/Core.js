var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LisaBasicCore = (function (_super) {
    __extends(LisaBasicCore, _super);
    function LisaBasicCore() {
        _super.apply(this, arguments);
    }
    LisaBasicCore.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this.trigger();
        }, 1);
    };
    return LisaBasicCore;
})(BasicListener);
