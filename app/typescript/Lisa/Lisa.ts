class Lisa {
		core:any;
		brain:any;
		input:LisaInput;
		output:LisaOutput;
		constructor() {
			console.log("i'm lisa. you still need to give me an input and an output and a brain");
			this.input = new LisaBasicInput();
			this.output = new LisaBasicOutput();
		}
	}

interface LisaInput {
	post(data : string) : void;
	onPost(listener: Function) :void;
}

class LisaBasicInput implements LisaInput {
	post(data:string) : void {
		console.log("this is the basicest form of input");
	}
	onPost(listener:Function) : void {

	}
}

interface LisaOutput {
	listen(listener:Function) : Function; 
	broadcast(message:String) : void;
}

class LisaBasicOutput implements LisaOutput {
	listen(listener:Function) : Function {
		console.log("you're listening!");
		return function() {

		};
	}
	broadcast(message:string) :void {
		console.log(message);
	}
}

interface LisaCore {
	onCycle(listener:Function) : void;
	cycle():void;
	start() : void;
}

class LisaBasicCore {
	cycleListeners:Function[];
	onCycle(listener:Function) : void {
		this.cycleListeners.push(listener);
	}
	cycle() : void {
		this.cycleListeners.forEach(function(listener){
			listener();
		})
	}
	start() : void {
		setInterval(function(){
			this.cycle();
		},1);
	}
	constructor() {
		this.start();
	}
}