const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const shapes = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters to start your svg.logo.' ,
        validate: (input) => input.length >= 3
    }, {
        type: 'input',
        name: 'text-color',
        message: 'Enter a color for your text in your logo.'
    }, {
        type: 'checkbox',
        name: 'shape-name',
        message: 'Choose a shape for your logo.',
        choices: ['circle', 'triangle', 'square']
    }, {
        type: 'input',
        name: 'shape-color',
        message: 'What color do you want your shape logo to be.'
    }, 
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName + '.md'), data);
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Generating logo..');
        console.log(responses)
        writeToFile('svg.logo', Shape(responses))
    })
};

init()