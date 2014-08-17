declare class Lisa {
    public core: LisaCore;
    public brain: LisaBrain;
    public input: LisaInput;
    public output: LisaOutput;
    constructor();
}
interface LisaInput {
    post(data: string): void;
    onPost(listener: Function): void;
}
declare class LisaBasicInput implements LisaInput {
    public post(data: string): void;
    public onPost(listener: Function): void;
}
interface LisaBrain {
}
declare class LisaBasicBrain implements LisaBrain {
}
interface LisaOutput {
    listen(listener: Function): Function;
    broadcast(message: String): void;
}
declare class LisaBasicOutput implements LisaOutput {
    public listen(listener: Function): Function;
    public broadcast(message: string): void;
}
interface LisaCore {
    onCycle(listener: Function): void;
    start(): void;
}
declare class LisaBasicCore implements LisaCore {
    private brain;
    private input;
    private output;
    private cycleListeners;
    public onCycle(listener: Function): void;
    private cycle;
    public start(): void;
    constructor();
}
