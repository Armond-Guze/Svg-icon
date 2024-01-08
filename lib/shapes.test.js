// import
const { Circle, Square, Triangle } = require("./shapes");

// test for circle
describe("Circle", () => {
  it("appears on screen", () => {
    const shape = new Circle();
    let color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="100%" height="100%" width="100%" fill="${color}"/>`
    );
  });
});
// test for square
describe("Square", () =>
  it("appears on screen", () => {
    const shape = new Square();
    let color = "green";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="50" height="200" width="200" fill="${color}"/>`
    );
  }));
// test for triangle
describe("Triangle", () => {
  it("appears on screen", () => {
    const shape = new Triangle();
    let color = "red";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`
    );
  });
});
