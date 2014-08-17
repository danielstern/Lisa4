/// <reference path="Lisa/Lisa.ts" />
declare var angular:any;
angular.module("LisaDemo",[]);


var lisa= new Lisa();

lisa.input.post("Hi!");
lisa.output.listen(function(){

})
