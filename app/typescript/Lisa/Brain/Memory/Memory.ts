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

	remember() {

	}

	recall() {
		
	}
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