declare class Lisa {
    public core: any;
    public brain: any;
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
    cycle(): void;
    start(): void;
}
declare class LisaBasicCore {
    public cycleListeners: Function[];
    public onCycle(listener: Function): void;
    public cycle(): void;
    public start(): void;
    constructor();
}
