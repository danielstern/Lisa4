interface LisaMemory {
    remember: Function;
    recall: Function;
}
declare class LisaBasicMemory {
    private shortTerm;
    private longTerm;
    private Language;
}
declare class Moment {
    public subject: Thing;
    public object: Thing;
    public verb: Action;
    public previous: Moment;
    public next: Moment;
    public parent: Moment;
    public children: Moment[];
    public related: Moment[];
    constructor(details?: any);
}
declare class Idea {
    private name;
    constructor(name: string);
}
declare class Thing extends Idea {
}
declare class Action extends Idea {
}
declare class Quality extends Idea {
}
declare var memorySeed: Moment[];
interface LisaBrain {
}
declare class LisaBasicBrain implements LisaBrain {
    private memory;
    private logic;
    private emotion;
}
interface LisaCore {
    listen(listener: Function): void;
    start(): void;
}
declare class LisaBasicCore extends BasicListener implements LisaCore {
    private brain;
    private input;
    private output;
    public start(): void;
}
interface LisaInput {
    post(data: string): void;
    onPost(listener: Function): void;
}
declare class LisaBasicInput implements LisaInput {
    public post(data: string): void;
    public onPost(listener: Function): void;
}
declare class Lisa {
    public core: LisaCore;
    public brain: LisaBrain;
    public input: LisaInput;
    public output: LisaOutput;
    constructor();
}
interface LisaLogic {
}
declare class LisaBasicLogic implements LisaLogic {
    private interpreter;
    private storyteller;
}
interface Listener {
    listen(listener: Function): Function;
    trigger(details: any): any;
}
declare class BasicListener implements Listener {
    private listeners;
    public listen(listener: Function): Function;
    public trigger(details?: any): void;
}
interface LisaOutput {
    listen: Function;
    trigger: Function;
}
declare class LisaBasicOutput extends BasicListener implements LisaOutput {
    public contructor: () => {};
}
declare var angular: any;
declare var lisa: Lisa;
