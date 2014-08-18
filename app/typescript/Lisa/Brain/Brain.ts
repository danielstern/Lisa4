/// <reference path="../Utilities/Listener.ts" />

interface LisaBrain {
	think:Function;
	input:Function;
	getOutput:Function;

}


class LisaBasicBrain extends BasicListener implements LisaBrain {
	private memory:LisaMemory;
	private logic:LisaLogic;
	private emotion:LisaEmotion
	private outputBuffer:String;

	constructor() {
		this.memory = new LisaBasicMemory();
		this.logic  = new LisaBasicLogic();
		this.emotion = new LisaBasicEmotion();

		this.logic.listen((thought:String)=>{
			this.outputBuffer = thought;
			})

		super();
	}

	input(thing:any) {
		this.logic.process(thing);
	}

	think() {
		this.logic.step();
	}

	getOutput() {
		return this.outputBuffer;
	}
}
