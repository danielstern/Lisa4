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
}