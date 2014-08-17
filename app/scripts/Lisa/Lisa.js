var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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

var LisaBasicBrain = (function () {
    function LisaBasicBrain() {
    }
    return LisaBasicBrain;
})();

var LisaBasicLogic = (function () {
    function LisaBasicLogic() {
    }
    return LisaBasicLogic;
})();

var LisaBasicMemory = (function () {
    function LisaBasicMemory() {
    }
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
