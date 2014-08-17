interface Listener {
    listen(listener: Function): Function;
    trigger(details: any): any;
}
declare class BasicListener implements Listener {
    private listeners;
    public listen(listener: Function): Function;
    public trigger(details?: any): void;
}
