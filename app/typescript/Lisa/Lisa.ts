class Lisa {
		core:LisaCore;
		brain:LisaBrain;
		input:LisaInput;
		output:LisaOutput;
		constructor() {
			this.input = new LisaBasicInput();
			this.output = new LisaBasicOutput();
			this.brain = new LisaBasicBrain();
			this.core = new LisaBasicCore();

			// this.core.setBrain(this.brain);
			// this.core.setInput(this.input);
			// this.core.setOutput(this.output);

			console.log("There seems to be a problem with the life support system, Dave.");
		}
	}

interface LisaInput {
	post(data : string) : void;
	onPost(listener: Function) :void;
}

class LisaBasicInput implements LisaInput {
	post(data:string) : void {

	}
	onPost(listener:Function) : void {

	}
}

interface LisaBrain {

}

class LisaBasicBrain implements LisaBrain {

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
	start() : void;
}

class LisaBasicCore implements LisaCore{
	private brain:LisaBrain;
	private input:LisaInput;
	private output:LisaOutput;
  private cycleListeners:Function[];
	public onCycle(listener:Function) : void {
		this.cycleListeners.push(listener);
	}
	private cycle= ():void =>{
		this.cycleListeners.forEach(function(listener){
			listener();
		})
	}
	public start():void {
		setInterval(()=>{
			this.cycle();
		},1);
	}
	constructor() {
		this.cycleListeners = [];
		this.start();
	}
}