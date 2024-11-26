import BaseOverlay from '../base/BaseOverlay';
export default class CharacterEncodingOverlay extends BaseOverlay {
    #default_character_encoding;
    // DEPRECATED - Use #attribute_character_encoding instead
    #attr_character_encoding;
    #attribute_character_encoding;
    constructor(overlay) {
        super(overlay);
        this.#default_character_encoding = overlay.default_character_encoding;
        // DEPRECATED - Use #attribute_character_encoding instead
        this.#attr_character_encoding = overlay.attr_character_encoding;
        this.#attribute_character_encoding = overlay.attribute_character_encoding;
    }
    get defaultCharacterEncoding() {
        return this.#default_character_encoding;
    }
    // DEPRECATED - Use attributeCharacterEncoding instead
    get attrCharacterEncoding() {
        return this.#attr_character_encoding;
    }
    get attributeCharacterEncoding() {
        return this.#attribute_character_encoding;
    }
}
