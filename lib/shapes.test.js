const Circle = require('./circle.js')
const Square = require('./square.js')
const Triangle = require('./triangle.js')

describe('circle', () => {
    it('should equal the circle code output', () => {
        const circleObj = new Circle();
        circleObj.setColor("red");
        const data = circleObj.render();
        expect(data).toEqual(`<circle cx='150' cy='100' r='90' fill='red'/>`);
    })
});

describe('square', () => {
    it('should equal the square code output', () => {
        const squareObj = new Square();
        squareObj.setColor("red");
        const data = squareObj.render();
        expect(data).toEqual(`<rect x='50' y='0' width='200' height='200' fill='red'/>`);
    })
});

describe('triangle', () => {
    it('should equal the triangle code output', () => {
        const triangleObj = new Triangle();
        triangleObj.setColor("red");
        const data = triangleObj.render();
        expect(data).toEqual(`<polygon points='150 0, 300 150, 0 150, 150 0' fill='red'/>`);
    })
});