class Triangle {
    constructor() {
        this.text = '';
    }
    setColor(shapeColor) {
        this.text = `<polygon points='150 0, 300 150, 0 150, 150 0' fill='${shapeColor}'/>`
    }
    render() {
        return this.text
    }
}

module.exports = Triangle