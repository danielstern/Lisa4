var Lisa = (function () {
    function Lisa() {
        console.log("i'm lisa. you still need to give me an input and an output and a brain");
        this.input = new LisaBasicInput();
    }
    return Lisa;
})();

var LisaBasicInput = (function () {
    function LisaBasicInput() {
    }
    LisaBasicInput.prototype.post = function (data) {
        console.log("this is the basicest form of input");
    };
    return LisaBasicInput;
})();
