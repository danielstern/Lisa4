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

		this.input.listen(function(thing){
			this.brain.input(thing);
			})

		this.core.listen(()=>{
			// console.log('core step')
			this.brain.think();
			this.output.broadcast(this.brain.getOutput());
			})		
	}
}
