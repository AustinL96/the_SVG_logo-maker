const fs = require('fs');
const inquirer = require('inquirer');
// const shapes = require('./lib/shapes.js') *** Self Reminder: look up how to export multiple Classes properly again when you have the time
// console.log(shapes)
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle')


//To do: create prompt ✓
console.log('Hello and welcome to my SVG generator. Please follow the prompts to receive your logo.')
inquirer.prompt([
    //To do: when prompted for text, can enter up to three characters ✓
    {
        name: 'text',
        message: 'Please insert your logo\'s text, up to 3 characters',
        validate: function(input) {
            if(input.length > 3) {
                return "Logo text must be 3 characters or less"
            } else {
                return true;
            }
        }
    },
    //To do: when prompted for text color, enter color key or hexadecimal # ✓
    {
        name: 'textColor',
        message: 'What color is your logo\s text? (Ex: "blue", or enter a hexadecimal value like #000000)'
    },
    //To do: when prompted for shape, list of shapes to choose: circle/triangle/square ✓
    {
        name: 'shape',
        message: 'Choose from this list what the shape of your logo will be.',
        type: 'list',
        choices: ['Circle', 'Triangle', 'Square']
    },
    //To do: when prompted for shape's color, enter color key or hexadecimal # ✓
    {
        name: 'shapeColor',
        message: 'What is the color of the logo\'s shape? (Ex: "blue", or enter a hexadecimal value like #000000)'
    }
    //To do: render object ✓
]).then((answersObj) => {
    let shapeContent = '';
    if(answersObj.shape == 'Circle') {
        const circleObj = new Circle();
        circleObj.setColor(answersObj.shapeColor);
        shapeContent = circleObj.render();
    }
    else if(answersObj.shape == 'Triangle') {
        const triangleObj = new Triangle();
        triangleObj.setColor(answersObj.shapeColor);
        shapeContent = triangleObj.render();
    }
    else if(answersObj.shape == 'Square') {
        const squareObj = new Square();
        squareObj.setColor(answersObj.shapeColor);
        shapeContent = squareObj.render();
    }
    const svgContent = svgFileContent(answersObj, shapeContent);
    fs.writeFile("./examples/logo.svg", svgContent, (err) => {
        if (err) {
            console.log(err)
        } else {
        console.log("Successfully created SVG file!")
        }
    });
}).catch((err) => {
    console.log("File creation failed", err);
})

//To do: show a 300x200 pixel image that matches the criteria ✓
function svgFileContent({text, textColor, shape, shapeColor}, shapeContent) {
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeContent}
    <text x="150" y="120" font-size="70" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`
}