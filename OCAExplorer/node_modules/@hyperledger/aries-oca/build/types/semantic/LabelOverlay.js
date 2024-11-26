import BaseOverlay from '../base/BaseOverlay';
export default class LabelOverlay extends BaseOverlay {
    #attribute_labels;
    #attribute_categories;
    #category_labels;
    language;
    constructor(overlay) {
        super(overlay);
        this.language = overlay.language;
        this.#attribute_labels = overlay.attribute_labels;
        this.#attribute_categories = overlay.attribute_categories;
        this.#category_labels = overlay.category_labels;
    }
    get attributeLabels() {
        return this.#attribute_labels;
    }
    get attributeCategories() {
        return this.#attribute_categories;
    }
    get categoryLabels() {
        return this.#category_labels;
    }
}
