var BasicListener = (function () {
    function BasicListener() {
    }
    BasicListener.prototype.listen = function (listener) {
        var _this = this;
        var id = Math.floor(Math.random() * 1e10);
        var canceller = function () {
        };
        canceller.prototype.id = id;
        return function () {
            _this.listeners.forEach(function (listener) {
                console.log("todo... cancel listener");
            });
        };
    };
    BasicListener.prototype.trigger = function (details) {
        if (typeof details === "undefined") { details = undefined; }
        this.listeners.forEach(function (listener) {
            listener(details);
        });
    };
    return BasicListener;
})();
