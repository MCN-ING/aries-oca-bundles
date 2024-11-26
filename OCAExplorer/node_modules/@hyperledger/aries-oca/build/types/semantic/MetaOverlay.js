import BaseOverlay from '../base/BaseOverlay';
export default class MetaOverlay extends BaseOverlay {
    #credential_help_text;
    #credential_support_url;
    #issuer_description;
    #issuer_url;
    language;
    name;
    description;
    issuer;
    constructor(overlay) {
        super(overlay);
        this.language = overlay.language;
        this.name = overlay.name;
        this.description = overlay.description;
        this.#credential_help_text = overlay.credential_help_text;
        this.#credential_support_url = overlay.credential_support_url;
        this.issuer = overlay.issuer;
        this.#issuer_description = overlay.issuer_description;
        this.#issuer_url = overlay.issuer_url;
    }
    get credentialHelpText() {
        return this.#credential_help_text;
    }
    get credentialSupportUrl() {
        return this.#credential_support_url;
    }
    get issuerDescription() {
        return this.#issuer_description;
    }
    get issuerUrl() {
        return this.#issuer_url;
    }
}
