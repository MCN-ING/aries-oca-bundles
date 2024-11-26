import BaseOverlay from '../base/BaseOverlay';
export default class StandardOverlay extends BaseOverlay {
    // DEPRECATED - Use #attribute_standards instead
    #attr_standards;
    #attribute_standards;
    constructor(overlay) {
        super(overlay);
        // DEPRECATED - Use #attribute_standards instead
        this.#attr_standards = overlay.attr_standards;
        this.#attribute_standards = overlay.attribute_standards;
    }
    // DEPRECATED - Use attributeStandards instead
    get attrStandards() {
        return this.#attr_standards;
    }
    get attributeStandards() {
        return this.#attribute_standards;
    }
}
