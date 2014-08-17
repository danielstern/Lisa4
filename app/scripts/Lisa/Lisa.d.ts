declare class Lisa {
    public core: any;
    public brain: any;
    public input: any;
    public output: any;
    constructor();
}
interface LisaInput {
    post(data: string): void;
}
declare class LisaBasicInput implements LisaInput {
    public post(data: string): void;
}
