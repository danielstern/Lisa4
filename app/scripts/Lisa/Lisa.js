var Lisa = (function () {
    function Lisa() {
        console.log("i'm lisa. you still need to give me an input and an output and a brain");
        this.input = new LisaBasicInput();
        this.output = new LisaBasicOutput();
    }
    return Lisa;
})();

var LisaBasicInput = (function () {
    function LisaBasicInput() {
    }
    LisaBasicInput.prototype.post = function (data) {
        console.log("this is the basicest form of input");
    };
    LisaBasicInput.prototype.onPost = function (listener) {
    };
    return LisaBasicInput;
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
        this.start();
    }
    LisaBasicCore.prototype.onCycle = function (listener) {
        this.cycleListeners.push(listener);
    };
    LisaBasicCore.prototype.cycle = function () {
        this.cycleListeners.forEach(function (listener) {
            listener();
        });
    };
    LisaBasicCore.prototype.start = function () {
        setInterval(function () {
            this.cycle();
        }, 1);
    };
    return LisaBasicCore;
})();
