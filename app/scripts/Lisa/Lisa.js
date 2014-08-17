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
