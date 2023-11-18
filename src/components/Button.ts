class Button {

    element  : HTMLElement;

    constructor( selector : string ) {

        this.element = this.getElement( selector );
    }


    public onClick( callback : (event: MouseEvent) => void ) {

        this.element.addEventListener('click', callback );
    }


    private getElement( selector : string ) {

        const element = document.querySelector( selector );

        if ( element instanceof HTMLElement ) {
            return element;
        } else {
            throw new Error("Element not found or is not an HTMLElement");
        }
    }    
}

export default Button;