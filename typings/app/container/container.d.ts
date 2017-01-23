declare class Container {
    storage: any[];
    add(item: string): boolean;
    remove(idx: number, count: number): boolean;
    findIndex(query: string): number;
    clear(): boolean;
    firstItem(): any;
    lastItem(): any;
    length(): number;
    isEmpty(): boolean;
}

export = Container;