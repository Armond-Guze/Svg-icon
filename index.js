const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { Circle, Square, Triangle } = require("./lib/shapes");

// creating blueprint for shapes, text and color values
class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
    this.color = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200" fill="${this.color}">
                   ${this.textElement}
                   ${this.shapeElement}
               </svg>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${this.text}</text>`;
  }
  setColor(color) {
    this.color = color;
  }
}

// questions that pop-up using inquirer
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters to start your svg.logo.",
    validate: (input) => input.length <= 3,
  },
  {
    type: "input",
    name: "text-color",
    message: "Enter a color for your text in your logo.",
  },
  {
    type: "checkbox",
    name: "shape-name",
    message: "Choose a shape for your logo.",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shape-color",
    message: "What color do you want your shape logo to be.",
  },
];

function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function that generates logo and write it to logo.svg file
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Generated logo.svg");
    console.log(responses);

    let selectedShape;
    const shapeName = responses["shape-name"][0];
    if (shapeName === "circle") {
      selectedShape = new Circle();
    } else if (shapeName === "triangle") {
      selectedShape = new Triangle();
    } else if (shapeName === "square") {
      selectedShape = new Square();
    } else {
      console.error("Invalid shape selected");
      return;
    }

    selectedShape.setColor(responses["shape-color"]);
    const svg = new Svg();
    svg.setColor(responses["text-color"]);
    svg.setTextElement(responses.text, responses["text-color"]);
    svg.setShapeElement(selectedShape);

    writeToFile("logo.svg", svg.render());
  });
}

init();
