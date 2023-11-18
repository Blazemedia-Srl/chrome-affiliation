export default class ElementPath {

    getPathTo( element : HTMLElement ) : string {

        if (element.id !== '') return 'id("' + element.id + '")';

        if (element === document.body) return '/';

        let ix = 0;
        let parent = element.parentNode;
        
        let siblings : HTMLElement[] = this.getChildren( parent );

        for (let i = 0; i < siblings.length; i++ ) {
        
            var sibling = siblings[i];

            if ( sibling.tagName === element.tagName )
                ix++;

            if ( sibling === element ) 
                return this.getPathTo( <HTMLElement>element.parentNode ) + `/${element.tagName}[${ix}]`;        
        }

        return '';
    }


    getElementByXPath( xpath : string ) : HTMLElement {

        let xPathResult : XPathResult = document.evaluate( xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

        console.log( xPathResult); 

        if( xPathResult.singleNodeValue === null) {
            throw new Error(`Impossible to resolve xpath: ${xpath}`);
        }

        return <HTMLElement>xPathResult.singleNodeValue;
    }


    private getChildren( node : ParentNode | null ) : HTMLElement[] {

        return node ? <HTMLElement[]>[].map.call( node.children, i => <HTMLElement>i) : [];
    }
}



