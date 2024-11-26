import BaseOverlay from '../base/BaseOverlay';
export default class InformationOverlay extends BaseOverlay {
    #attribute_information;
    language;
    constructor(overlay) {
        super(overlay);
        this.language = overlay.language;
        this.#attribute_information = overlay.attribute_information;
    }
    get attributeInformation() {
        return this.#attribute_information;
    }
}
