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


interface LisaBrain {

}



class LisaBasicBrain implements LisaBrain {
	private memory:LisaMemory;
	private logic:LisaLogic;
	private emotion:any;
	

}

interface LisaLogic {

}

class LisaBasicLogic implements LisaLogic{
	/* turns human speech into lisa objects */
	private interpreter:any;

	/* turns lisa objects into human speech */
	private storyteller:any;
}

interface LisaMemory {
	/* Stores a memory in short term */
	remember: Function;
	/* Returns all memories containing a particular fragment. */
	recall: Function;
}

class LisaBasicMemory {
	private shortTerm:any;
	private longTerm:any;
	private Language:any;
}


/* an individual unit of memory */
class Moment {
	subject:Thing;
	object:Thing;
	verb:Action;
	previous:Moment;
	next:Moment;
	parent:Moment;
	/* submoments describing this moment. sherlock holmes would have 100 children levels and paris hilton would have 2 */
	children:Moment[];
	related:Moment[];

	constructor(details:any = undefined) {
		if (details.subject) this.subject = details.subject;
		if (details.verb) this.verb = details.verb;
		if (details.object) this.object = details.object;
	}
}

class Idea {
	private name;
	constructor(name:string) {
		this.name = name;
	}
}

class Thing extends Idea {};
class Action extends Idea {};
class Quality extends Idea {};

var memorySeed:Moment[] = [];
memorySeed.push(new Moment({
	subject: new Thing("Mary"),
	verb: new Action("have"),
	object: new Thing("lamb"),
	children:[
		new Moment({
			subject: new Thing("lamb"),
			verb: new Action("is"),
			object: new Quality("little")
		})
	]
}))