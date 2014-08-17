var Lisa = (function () {
    function Lisa() {
        this.input = new LisaBasicInput();
        this.output = new LisaBasicOutput();
        this.brain = new LisaBasicBrain();
        this.core = new LisaBasicCore();

        console.log("There seems to be a problem with the life support system, Dave.");
    }
    return Lisa;
})();

var LisaBasicInput = (function () {
    function LisaBasicInput() {
    }
    LisaBasicInput.prototype.post = function (data) {
    };
    LisaBasicInput.prototype.onPost = function (listener) {
    };
    return LisaBasicInput;
})();

var LisaBasicBrain = (function () {
    function LisaBasicBrain() {
    }
    return LisaBasicBrain;
})();

var LisaBasicOutput = (function () {
    function LisaBasicOutput() {
    }
    LisaBasicOutput.prototype.listen = function (listener) {
        console.log("you're listening!");
        return function () {
        };
    };
    LisaBasicOutput.prototype.broadcast = function (message) {
        console.log(message);
    };
    return LisaBasicOutput;
})();

var LisaBasicCore = (function () {
    function LisaBasicCore() {
        var _this = this;
        this.cycle = function () {
            _this.cycleListeners.forEach(function (listener) {
                listener();
            });
        };
        this.cycleListeners = [];
        this.start();
    }
    LisaBasicCore.prototype.onCycle = function (listener) {
        this.cycleListeners.push(listener);
    };

    LisaBasicCore.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this.cycle();
        }, 1);
    };
    return LisaBasicCore;
})();
