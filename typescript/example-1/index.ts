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

class Container<T> {
    private storage: T[] = [];

    [Symbol.iterator]() {
        return this.storage[Symbol.iterator]();
    }

    add(item: T): boolean {
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

/*
 * Задание №2.
 *
 * Создать абстрактный класс Printable – базовый класс для всех сущностей, информацию о которых можно представить (распечатать) в виде строки (std::string).
 * Создать класс Named – наследник Printable – базовый класс для всех сущностей, которые имеют имя. Строка с именем без default-значения передаётся в единственный конструктор.
 * Создать абстрактный класс Shape – наследник Printable – базовый класс для фигур на декартовой плоскости.
 *
 * Спроектировать и реализовать иерархию классов конкретных именованных фигур:
 *
 * Point - точка,
 * Circle - окружность,
 * Rect - прямоугольник со сторонами, параллельными OX и OY (с помощью двух точек),
 * Square -  прямоугольник с одинаковыми сторонами,
 * Polyline - ломаная; должна быть реализована с помощью Container< Point >, наполняться с помощью метода AddPoint( Point const & point ),
 * Polygon - произвольный многоугольник.
 *
 * С помощью статического метода Shape::GetCount() реализовать возможность узнать, сколько существует экземпляров Shape (т.е. любых фигур) в данный момент.
 * У каждой фигуры в качестве текстовой информации должна печататься содержательная информация, например, у точки есть координаты, у окружности ещё есть радиус и площадь, у ломаной - длина и т.п.
 * Необходимо реализовать также и вывод информации о каждом объекте в стандартный поток вывода std::ostream с помощью оператора std::ostream & operator << ( std::ostream & ioStream, ... );
 *
 * Реализовать фабрику фигур, которая умеет создавать конкретную фигуру заданного типа со случайными параметрами.
 *
 */
abstract class Printable {
    print(): void {
        console.log(`Shape => ${this.toString()}`);
    };
}

abstract class Shape extends Printable {
    private static count: number = 0;

    constructor() {
        super();
        Shape.count++;
    }

    static destroy() {
        Shape.count--;
    };

    static getCount() {
        return Shape.count;
    }
}

class Point extends Shape {
    constructor(public x: number = 0, public y: number = 0) {
        super();
    }

    destroy() {
        Shape.destroy();
    }

    toString(): string {
        return `Point coordinates: x = ${this.x}, y = ${this.y}`;
    }
}

class Circle extends Shape {
    constructor(public p1: Point, public p2: Point) {
        super();
    }

    destroy() {
        this.p1.destroy();
        this.p2.destroy();

        Shape.destroy();
    }

    toString(): string {
        return `Circle coordinates: p1 = { x: ${this.p1.x}, y: ${this.p1.y} }, p2 = { x: ${this.p2.x}, y: ${this.p2.y} }`;
    }
}

function randomRange(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min) + min);
}

function shapeFactory(shape: string): Shape {
    switch (shape) {
        case 'point': return new Point(randomRange(), randomRange());
        case 'circle': return new Circle(new Point(randomRange(), randomRange()), new Point(randomRange(), randomRange()));
        default: throw new Error('can\'t find the shape');
    }
}
/*
 * Usage
 */
const storage = new Container<Shape>();

storage.add(shapeFactory('point'));
storage.add(shapeFactory('circle'));

console.log(storage);

for (let shape of storage) {
    shape.print();
}