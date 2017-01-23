const FIRST_ITEM = 0;

export default class Container {
    storage = [];

    add(item) {
        this.storage.push(item);
        return true;
    }

    remove(idx, items) {
        const oldStorageLength = this.storage.length;

        this.storage.splice(idx, items);

        return oldStorageLength !== this.storage.length;
    }

    findIndex(query) {
        return this.storage.indexOf(query);
    }

    clear() {
        this.storage.length = 0;
        return true;
    }

    getFirstItem() {
        return this.storage[FIRST_ITEM];
    }

    getLastItem(): any {
        const LAST_ITEM = this.storage.length - 1;
        return this.storage[LAST_ITEM];
    }

    getLength(): number {
        return this.storage.length;
    }

    isEmpty(): boolean {
        return Boolean(!this.storage.length);
    }
}
