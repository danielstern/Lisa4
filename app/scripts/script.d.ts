interface Listener {
    listen(listener: Function): Function;
    trigger(details: any): any;
}
declare class BasicListener implements Listener {
    private listeners;
    public listen: (listener: Function) => () => void;
    public trigger(details?: any): void;
}
interface LisaBrain {
    think: Function;
    input: Function;
    getOutput: Function;
}
declare class LisaBasicBrain extends BasicListener implements LisaBrain {
    private memory;
    private logic;
    private emotion;
    private outputBuffer;
    constructor();
    public input(thing: any): void;
    public think(): void;
    public getOutput(): String;
}
interface LisaEmotion {
}
declare class LisaBasicEmotion implements LisaEmotion {
}
interface LisaLogic {
    step: Function;
    process: Function;
    listen: Function;
}
declare class LisaBasicLogic extends BasicListener implements LisaLogic {
    private interpreter;
    private storyteller;
    public step(): void;
    public process(thing: any): void;
    constructor();
}
interface LisaMemory {
    remember: Function;
    recall: Function;
}
declare class LisaBasicMemory {
    private shortTerm;
    private longTerm;
    private Language;
    public remember(): void;
    public recall(): void;
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
interface LisaCore {
    listen(listener: Function): void;
    start(): void;
}
declare class LisaBasicCore extends BasicListener implements LisaCore {
    private brain;
    private input;
    private output;
    public start(): void;
    constructor();
}
interface LisaInput {
    post(data: string): void;
    listen(listener: Function): void;
}
declare class LisaBasicInput extends BasicListener implements LisaInput {
    public post(data: string): void;
}
declare class Lisa {
    public core: LisaCore;
    public brain: LisaBrain;
    public input: LisaInput;
    public output: LisaOutput;
    constructor();
}
interface LisaOutput {
    listen: Function;
    trigger: Function;
    broadcast: Function;
}
declare class LisaBasicOutput extends BasicListener implements LisaOutput {
    public broadcast(message: any): void;
}
declare var angular: any;
declare var lisa: Lisa;
