interface LisaInput {
    post(data: string): void;
    onPost(listener: Function): void;
}
declare class LisaBasicInput implements LisaInput {
    public post(data: string): void;
    public onPost(listener: Function): void;
}
