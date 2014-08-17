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
