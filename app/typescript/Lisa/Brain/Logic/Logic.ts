interface LisaLogic {
	step :Function;
	process: Function;
	listen: Function;
}

class LisaBasicLogic extends BasicListener implements LisaLogic{
	/* turns human speech into lisa objects */
	private interpreter:any;

	/* turns lisa objects into human speech */
	private storyteller:any;

	step() {
		this.trigger("Hello world");
	}

	process(thing:any) {

	}

	constructor() {
		super();

	}
}
