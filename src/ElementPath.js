class ElementPath {
    getPathTo(element) {
        if (element.id !== '')
            return 'id("' + element.id + '")';
        if (element === document.body)
            return element.tagName;
        let ix = 0;
        let parent = element.parentNode;
        let siblings = this.getChildren(parent);
        for (let i = 0; i < siblings.length; i++) {
            var sibling = siblings[i];
            if (sibling.tagName === element.tagName)
                ix++;
            if (sibling === element)
                return this.getPathTo(element.parentNode) + `/${element.tagName}[${ix}]`;
        }
        return '';
    }
    getElementByXPath(xpath) {
        let xPathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        if (xPathResult.singleNodeValue === null) {
            throw new Error(`Impossible to resolve xpath: {$xpath}`);
        }
        return xPathResult.singleNodeValue;
    }
    getChildren(node) {
        return node ? [].map.call(node.children, i => i) : [];
    }
}
export default ElementPath;
