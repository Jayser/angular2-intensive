interface Storage {
    storage: any[];
    add(item: any): boolean;
    remove(idx: number, items: number): boolean;
    clear(): boolean;
    getFirstItem(): any;
    getLastItem(): any;
    getLength(): number;
    isEmpty(): boolean;
}

class Container {
    private storage: any[];

    constructor() {
        this.storage = [];
    }

    add(item: any): boolean {
        return Boolean(this.storage.push(item));
    }

    remove(idx: number, items = 1): boolean {
        let result: boolean = false;
        const oldStorageLength: number = this.storage.length;

        if (idx || idx === 0) {
            this.storage.splice(idx, items);
            result = oldStorageLength !== this.storage.length;
        }

        return result;
    }

    get clear(): boolean {
        this.storage.length = 0;
        return true
    }

    get getFirstItem(): any {
        const FIRST_ITEM: number = 0;
        return this.storage[FIRST_ITEM];
    }

    get getLastItem(): any {
        const LAST_ITEM: number = this.storage.length - 1;
        return this.storage[LAST_ITEM];
    }

    get getLength(): number {
        return this.storage.length;
    }

    get isEmpty(): boolean {
        return Boolean(!this.storage.length);
    }
}

const example1 = new Container();

console.log(example1);