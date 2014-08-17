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
