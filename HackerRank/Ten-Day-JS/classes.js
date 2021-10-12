class Polygon {
  constructor(lengths) {
    this.lengths = lengths;
  }
  perimeter() {
    return this.lengths.reduce((sum, length) => sum + length, 0);
  }
}
