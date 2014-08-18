/// <reference path="../Utilities/Listener.ts" />


interface LisaCore {
	listen(listener:Function) : void;
	start() : void;
}

class LisaBasicCore extends BasicListener implements LisaCore {
	private brain:LisaBrain;
	private input:LisaInput;
	private output:LisaOutput;

	public start():void {
		setInterval(()=>{
			this.trigger();
		},1);
	}

	constructor() {
		super();
		this.brain = new LisaBasicBrain();
		this.input = new LisaBasicInput();
		this.output = new LisaBasicOutput();

		console.log('core starting');
		this.start();
	}
}