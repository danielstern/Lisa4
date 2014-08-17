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