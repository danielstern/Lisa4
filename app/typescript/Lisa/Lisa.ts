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
