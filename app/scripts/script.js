var BasicListener = (function () {
    function BasicListener() {
        var _this = this;
        this.listeners = [];
        this.listen = function (listener) {
            var id = Math.floor(Math.random() * 1e10);
            var canceller = function () {
            };
            canceller.prototype.id = id;
            _this.listeners.push(listener);

            return function () {
                _this.listeners.forEach(function (listener) {
                    console.log("todo... cancel listener");
                });
            };
        };
    }
    BasicListener.prototype.trigger = function (details) {
        if (typeof details === "undefined") { details = undefined; }
        this.listeners.forEach(function (listener) {
            listener(details);
        });
    };
    return BasicListener;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var LisaBasicBrain = (function (_super) {
    __extends(LisaBasicBrain, _super);
    function LisaBasicBrain() {
        var _this = this;
        this.memory = new LisaBasicMemory();
        this.logic = new LisaBasicLogic();
        this.emotion = new LisaBasicEmotion();

        this.logic.listen(function (thought) {
            _this.outputBuffer = thought;
        });

        _super.call(this);
    }
    LisaBasicBrain.prototype.input = function (thing) {
        this.logic.process(thing);
    };

    LisaBasicBrain.prototype.think = function () {
        this.logic.step();
    };

    LisaBasicBrain.prototype.getOutput = function () {
        return this.outputBuffer;
    };
    return LisaBasicBrain;
})(BasicListener);
var LisaBasicEmotion = (function () {
    function LisaBasicEmotion() {
    }
    return LisaBasicEmotion;
})();
var LisaBasicLogic = (function (_super) {
    __extends(LisaBasicLogic, _super);
    function LisaBasicLogic() {
        _super.call(this);
    }
    LisaBasicLogic.prototype.step = function () {
        this.trigger("Hello world");
    };

    LisaBasicLogic.prototype.process = function (thing) {
    };
    return LisaBasicLogic;
})(BasicListener);
var LisaBasicMemory = (function () {
    function LisaBasicMemory() {
    }
    LisaBasicMemory.prototype.remember = function () {
    };

    LisaBasicMemory.prototype.recall = function () {
    };
    return LisaBasicMemory;
})();

var Moment = (function () {
    function Moment(details) {
        if (typeof details === "undefined") { details = undefined; }
        if (details.subject)
            this.subject = details.subject;
        if (details.verb)
            this.verb = details.verb;
        if (details.object)
            this.object = details.object;
    }
    return Moment;
})();

var Idea = (function () {
    function Idea(name) {
        this.name = name;
    }
    return Idea;
})();

var Thing = (function (_super) {
    __extends(Thing, _super);
    function Thing() {
        _super.apply(this, arguments);
    }
    return Thing;
})(Idea);
;
var Action = (function (_super) {
    __extends(Action, _super);
    function Action() {
        _super.apply(this, arguments);
    }
    return Action;
})(Idea);
;
var Quality = (function (_super) {
    __extends(Quality, _super);
    function Quality() {
        _super.apply(this, arguments);
    }
    return Quality;
})(Idea);
;

var memorySeed = [];
memorySeed.push(new Moment({
    subject: new Thing("Mary"),
    verb: new Action("have"),
    object: new Thing("lamb"),
    children: [
        new Moment({
            subject: new Thing("lamb"),
            verb: new Action("is"),
            object: new Quality("little")
        })
    ]
}));

var LisaBasicCore = (function (_super) {
    __extends(LisaBasicCore, _super);
    function LisaBasicCore() {
        _super.call(this);
        this.brain = new LisaBasicBrain();
        this.input = new LisaBasicInput();
        this.output = new LisaBasicOutput();

        console.log('core starting');
        this.start();
    }
    LisaBasicCore.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this.trigger();
        }, 1);
    };
    return LisaBasicCore;
})(BasicListener);
var LisaBasicInput = (function (_super) {
    __extends(LisaBasicInput, _super);
    function LisaBasicInput() {
        _super.apply(this, arguments);
    }
    LisaBasicInput.prototype.post = function (data) {
        this.trigger(data);
    };
    return LisaBasicInput;
})(BasicListener);
var Lisa = (function () {
    function Lisa() {
        var _this = this;
        this.input = new LisaBasicInput();
        this.output = new LisaBasicOutput();
        this.brain = new LisaBasicBrain();
        this.core = new LisaBasicCore();

        this.input.listen(function (thing) {
            this.brain.input(thing);
        });

        this.core.listen(function () {
            _this.brain.think();
            _this.output.broadcast(_this.brain.getOutput());
        });
    }
    return Lisa;
})();

var LisaBasicOutput = (function (_super) {
    __extends(LisaBasicOutput, _super);
    function LisaBasicOutput() {
        _super.apply(this, arguments);
    }
    LisaBasicOutput.prototype.broadcast = function (message) {
        console.log(message);
    };
    return LisaBasicOutput;
})(BasicListener);
angular.module("LisaDemo", []);

var lisa = new Lisa();
