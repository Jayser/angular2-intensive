const FIRST_ITEM = 0;
const COUNT_ITEMS = 1;

class Container<T> {
    private storage: T[] = [];

    [Symbol.iterator]() {
        return this.storage[Symbol.iterator]();
    }

    add(item: T) {
        this.storage.push(item);
        return true;
    }

    remove(idx: number): boolean {
        const oldStorageLength = this.storage.length;

        this.storage.splice(idx, COUNT_ITEMS);

        return oldStorageLength !== this.storage.length;
    }

    find(query: T): number {
        return this.storage.indexOf(query);
    }

    clear(): boolean {
        this.storage.length = 0;
        return true
    }

    get first(): any {
        return this.storage[FIRST_ITEM];
    }

    get last(): T {
        const LAST_ITEM = this.storage.length - 1;
        return this.storage[LAST_ITEM];
    }

    get length(): number {
        return this.storage.length;
    }

    isEmpty(): boolean {
        return Boolean(!this.storage.length);
    }
}

const instance = new Container<number>();

console.log(instance.add(5));
console.log(instance.add(10));
console.log(instance.add(15));
console.log(instance.length);
console.log(instance.find(10));
console.log(instance.remove(instance.find(10)));
console.log(instance.length);

for (const prop of instance) {
    console.log(`prop ${ prop }`);
}
