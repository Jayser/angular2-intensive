"use strict";
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
    get first() {
        return this.storage[FIRST_ITEM];
    }
    get last() {
        const LAST_ITEM = this.storage.length - 1;
        return this.storage[LAST_ITEM];
    }
    get length() {
        return this.storage.length;
    }
    isEmpty() {
        return Boolean(!this.storage.length);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Container;
//# sourceMappingURL=container.js.map