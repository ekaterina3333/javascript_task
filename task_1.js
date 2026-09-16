class Shape { 
  valueOf() {
    return this.area;
  }
}

// Квадрат
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
    this.area = side * side;
  }
}

// Прямоугольник
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    this.area = this.width * this.height;
  }
}

// Треугольник
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
    this.area = (this.base * this.height) / 2;
  }
}

// Круг
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.area = Math.PI * (this.radius ** 2);
  }
}

// Произвольная фигура
class CustomShape extends Shape {
  constructor(area) {
    super();
    this.area = area;
  }
}
