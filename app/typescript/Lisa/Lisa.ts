class Lisa {
		core:any;
		brain:any;
		input:any;
		output:any;
		constructor() {
			console.log("i'm lisa. you still need to give me an input and an output and a brain");
			this.input = new LisaBasicInput();
		}
	}

interface LisaInput {
	post(data : string) : void;
}

class LisaBasicInput implements LisaInput {
	post(data:string) : void {
		console.log("this is the basicest form of input");
	}
}