angular.module("LisaDemo", []);

var lisa = new Lisa();

lisa.input.post("Hi!");
lisa.output.listen(function () {
});
