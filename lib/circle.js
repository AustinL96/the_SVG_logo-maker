class Circle {
    constructor() {
        this.text = '';
    }
    setColor(shapeColor) {
        this.text = `<circle cx='150' cy='100' r='90' fill='${shapeColor}'/>`
    }
    render() {
        return this.text
    }
}

module.exports = Circle