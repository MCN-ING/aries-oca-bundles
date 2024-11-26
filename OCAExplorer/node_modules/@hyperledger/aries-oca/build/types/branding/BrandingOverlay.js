import { generateColor } from '../../utils/color';
import BaseOverlay from '../base/BaseOverlay';
export default class BrandingOverlay extends BaseOverlay {
    #background_image;
    #background_image_slice;
    #primary_background_color;
    #secondary_background_color;
    #primary_attribute;
    #secondary_attribute;
    #issued_date_attribute;
    #expiry_date_attribute;
    logo;
    constructor(credentialDefinitionId, overlay) {
        super(overlay);
        this.logo = overlay.logo;
        this.#background_image = overlay.background_image;
        this.#background_image_slice = overlay.background_image_slice;
        this.#primary_background_color = overlay.primary_background_color ?? generateColor(credentialDefinitionId);
        this.#secondary_background_color = overlay.secondary_background_color;
        this.#primary_attribute = overlay.primary_attribute;
        this.#secondary_attribute = overlay.secondary_attribute;
        this.#issued_date_attribute = overlay.issued_date_attribute;
        this.#expiry_date_attribute = overlay.expiry_date_attribute;
    }
    get backgroundImage() {
        return this.#background_image;
    }
    get backgroundImageSlice() {
        return this.#background_image_slice;
    }
    get primaryBackgroundColor() {
        return this.#primary_background_color;
    }
    get secondaryBackgroundColor() {
        return this.#secondary_background_color;
    }
    get primaryAttribute() {
        return this.#primary_attribute;
    }
    get secondaryAttribute() {
        return this.#secondary_attribute;
    }
    get issuedDateAttribute() {
        return this.#issued_date_attribute;
    }
    get expiryDateAttribute() {
        return this.#expiry_date_attribute;
    }
}
