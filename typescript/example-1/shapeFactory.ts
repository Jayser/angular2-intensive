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

class Named extends Printable {
    constructor(public name: string) {
        super();
    }

    toString() {
        return this.name;
    }
}

export abstract class Shape extends Printable {
    private static count: number = 0;

    constructor() {
        super();
        Shape.count++;
    }

    get count() {
        return Shape.count;
    }
}

class Point extends Shape {
    constructor(public x: number = 0, public y: number = 0) {
        super();
    }

    toString() {
        console.info(`Point coordinates: x = ${this.x}, y = ${this.y}`);
    }
}

class Circle extends Shape {
    constructor(public p1?: Point, public p2?: Point) {
        super();
    }

    toString() {
        console.info(`Circle coordinates: p1 = { x: ${this.p1.x}, y: ${this.p1.y} }, p2 = { x: ${this.p2.x}, y: ${this.p2.y} }`);
    }
}

function randomRange(min: number = 0, max: number = 100): number {
    return Math.random() * (max - min) + min;
}

export function shapeFactory(shape: string): Shape {
    switch (shape) {
        case 'point': return new Point(randomRange(), randomRange());
        case 'circle': return new Circle(new Point(randomRange()), new Point(randomRange()));
        default: throw new Error('can\'t find the shape');
    }
}