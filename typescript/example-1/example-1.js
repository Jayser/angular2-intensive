class Container {
    constructor() {
        this.storage = [];
    }
    add(item) {
        return Boolean(this.storage.push(item));
    }
    remove(idx, items = 1) {
        let result = false;
        const oldStorageLength = this.storage.length;
        if (idx || idx === 0) {
            this.storage.splice(idx, items);
            result = oldStorageLength !== this.storage.length;
        }
        return result;
    }
    get clear() {
        this.storage.length = 0;
        return true;
    }
    get getFirstItem() {
        const FIRST_ITEM = 0;
        return this.storage[FIRST_ITEM];
    }
    get getLastItem() {
        const LAST_ITEM = this.storage.length - 1;
        return this.storage[LAST_ITEM];
    }
    get getLength() {
        return this.storage.length;
    }
    get isEmpty() {
        return Boolean(!this.storage.length);
    }
}
const example1 = new Container();
console.log(example1);
//# sourceMappingURL=example-1.js.map