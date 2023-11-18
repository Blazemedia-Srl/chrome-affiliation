class Button {
    constructor(selector) {
        this.element = this.getElement(selector);
    }
    onClick(callback) {
        this.element.addEventListener('click', callback);
    }
    getElement(selector) {
        const element = document.querySelector(selector);
        if (element instanceof HTMLElement) {
            return element;
        }
        else {
            throw new Error("Element not found or is not an HTMLElement");
        }
    }
}
export default Button;
