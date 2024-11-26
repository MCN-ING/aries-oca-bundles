import BaseOverlay from '../base/BaseOverlay';
export default class FormatOverlay extends BaseOverlay {
    #attribute_formats;
    constructor(overlay) {
        super(overlay);
        this.#attribute_formats = overlay.attribute_formats;
    }
    get attributeFormats() {
        return this.#attribute_formats;
    }
}
