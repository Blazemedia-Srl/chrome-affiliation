import ElementPath from './src/ElementPath.js';
import Button from './src/Button.js';


let button = new Button('#main_button');
let elementPath = new ElementPath;

document.addEventListener('click', e => {
    console.clear()
    
    let currentElement = document.elementFromPoint( e.clientX, e.clientY );

    if( currentElement === null ) return;
    
    let path = elementPath.getPathTo( <HTMLElement>currentElement );

    let element = elementPath.getElementByXPath( path );
    
    console.log( path, element );
    
    element.insertAdjacentHTML('beforebegin', '<div class="bm_element"><button>BEL BOTTONAZZO</button></div>');

}, {passive: true});


document.addEventListener('mousemove', e => {
    
    console.clear();

    let currentElement = document.elementFromPoint( e.clientX, e.clientY );

    if( currentElement === null ) return;

    if( !currentElement.classList.contains('bm_elemeent_choice') ){

        let elements = document.querySelectorAll('.bm_element_choice');

        if( elements == null ) return;

        [].map.call( elements, (el : HTMLElement) => { 
            let parent = el.parentNode;
            
            if( parent ) {
                let button = parent.querySelector('.bm_element');
                
                if( button ) button.remove(); 
            } 
        } );

        currentElement.classList.add('bm_element_choice');
        currentElement.insertAdjacentHTML('beforebegin', '<div class="bm_element"><button>BEL BOTTONAZZO</button></div>');
    } 
    
    
    

}, {passive: true})

button.onClick( ( evt ) => { alert(' button onclick method '); } );



