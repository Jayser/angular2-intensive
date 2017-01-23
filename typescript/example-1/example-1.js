const FIRST_ITEM = 0;
const COUNT_ITEMS = 1;
class Container {
    constructor() {
        this.storage = [];
    }
    [Symbol.iterator]() {
        return this.storage[Symbol.iterator]();
    }
    add(item) {
        this.storage.push(item);
        return true;
    }
    remove(idx) {
        const oldStorageLength = this.storage.length;
        this.storage.splice(idx, COUNT_ITEMS);
        return oldStorageLength !== this.storage.length;
    }
    find(query) {
        return this.storage.indexOf(query);
    }
    clear() {
        this.storage.length = 0;
        return true;
    }
    firstItem() {
        return this.storage[FIRST_ITEM];
    }
    lastItem() {
        const LAST_ITEM = this.storage.length - 1;
        return this.storage[LAST_ITEM];
    }
    length() {
        return this.storage.length;
    }
    isEmpty() {
        return Boolean(!this.storage.length);
    }
}
const instance = new Container();
console.log(instance.add(5));
console.log(instance.add(10));
console.log(instance.add(15));
console.log(instance.length());
console.log(instance.find(10));
console.log(instance.remove(instance.find(10)));
console.log(instance.length());
for (const prop of instance) {
    console.log(`prop ${prop}`);
}
//# sourceMappingURL=example-1.js.map