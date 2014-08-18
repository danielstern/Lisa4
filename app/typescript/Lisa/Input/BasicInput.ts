interface LisaInput {
	post(data : string) : void;
	listen(listener: Function) :void;
}

class LisaBasicInput extends BasicListener implements LisaInput {
	post(data:string) :void {
		this.trigger(data);
	}
	
}