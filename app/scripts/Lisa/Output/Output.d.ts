interface LisaOutput {
    listen: Function;
    trigger: Function;
}
declare class LisaBasicOutput extends BasicListener implements LisaOutput {
    public contructor: () => {};
}
