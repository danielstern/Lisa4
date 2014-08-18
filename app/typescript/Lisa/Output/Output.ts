/// <reference path="../Utilities/Listener.ts" />

interface LisaOutput {
	listen: Function;
	trigger: Function;
	broadcast: Function;

}

class LisaBasicOutput extends BasicListener implements LisaOutput {
	broadcast(message:any) {
		console.log(message);
	}
}

