interface Container {
    add(item: any): boolean;
    remove(idx: number, items: number): boolean;
    clear(): boolean;
    getFirstItem(): any;
    getLastItem(): any;
    getLength(): number;
    isEmpty(): boolean;
}

class List implements Container {
    private storage: any[];

    constructor() {
        this.storage = [];
    }

    add(item: any) {
        this.storage.push(item);
        return true;
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

    clear(): boolean {
        this.storage.length = 0;
        return true
    }

    getFirstItem(): any {
        const FIRST_ITEM: number = 0;
        return this.storage[FIRST_ITEM];
    }

    getLastItem(): any {
        const LAST_ITEM: number = this.storage.length - 1;
        return this.storage[LAST_ITEM];
    }

    getLength(): number {
        return this.storage.length;
    }

    isEmpty(): boolean {
        return Boolean(!this.storage.length);
    }
}

const example1 = new List();

console.log(example1);


function alertFirst(container: Container) {
    alert(container.getFirstItem());
}