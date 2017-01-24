/*
 * Задание №1.
 *
 * Спроектировать и реализовать шаблонный класс Container со следующими возможностями:
 *  - добавить новый элемент в начало/конец;
 *  - удалить первый/последний элемент;
 *  - получить значение первого/последнего элемента;
 *  - перебрать все элементы (не обязательно делать итератор);
 *  - узнать кол-во элементов;
 *  - проверить на пустоту;
 *  - очистить.
 *
 *  Класс должен быть эффективным и универсальным (должен подходить для хранения экземпляров любых типов и использования где угодно).
 *  Для тех, кто в танке: не надо реализовывать Container с помощью какого-либо готового контейнера.
 *
 */
const FIRST_ITEM = 0;
const COUNT_ITEMS = 1;

export default class Container<T> {
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