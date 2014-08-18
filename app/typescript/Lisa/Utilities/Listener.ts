interface Listener {
	listen(listener:Function) : Function; 
	trigger(details:any) ; 
}

class BasicListener implements Listener {
	private listeners : Function[] = [];
	listen = (listener:Function)  => {
		var id : Number = Math.floor(Math.random() * 1e10);
		var canceller = function() {

		}
		canceller.prototype.id = id;
		this.listeners.push(listener);
		// console.log("creating listener")
		return () => {
			this.listeners.forEach(function(listener){
				console.log("todo... cancel listener");
			})
		};
	}
	trigger(details:any = undefined) {
		this.listeners.forEach(function(listener){
			listener(details);
		})
	}
}
