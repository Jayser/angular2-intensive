class List {
    constructor() {
        this.storage = [];
    }
    add(item) {
        this.storage.push(item);
        return true;
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
    clear() {
        this.storage.length = 0;
        return true;
    }
    getFirstItem() {
        const FIRST_ITEM = 0;
        return this.storage[FIRST_ITEM];
    }
    getLastItem() {
        const LAST_ITEM = this.storage.length - 1;
        return this.storage[LAST_ITEM];
    }
    getLength() {
        return this.storage.length;
    }
    isEmpty() {
        return Boolean(!this.storage.length);
    }
}
const example1 = new List();
console.log(example1);
function alertFirst(container) {
    alert(container.getFirstItem());
}
//# sourceMappingURL=example-1.js.map