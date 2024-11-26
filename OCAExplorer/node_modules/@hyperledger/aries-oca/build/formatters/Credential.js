import { CredentialPreviewAttribute, } from '@aries-framework/core';
export class LocalizedCredential {
    #bundle;
    issuer;
    name;
    attributes;
    constructor(bundle, record, language) {
        if (!language) {
            throw new Error('language is required');
        }
        this.#bundle = bundle;
        this.issuer = bundle.metadata.issuer?.[language];
        this.name = bundle.metadata.name?.[language];
        // If no record attributes are present then grab default attributes from the bundle
        const credentialAttributes = record.credentialAttributes?.length
            ? record.credentialAttributes
            : bundle.attributes.map((attribute) => {
                return new CredentialPreviewAttribute({ ...attribute, value: '' });
            });
        this.attributes =
            credentialAttributes
                ?.filter((attribute) => bundle.getFlaggedAttribute(attribute.name))
                .map((attribute) => {
                const overlayOptions = bundle.getAttribute(attribute.name) ?? { name: attribute.name, type: '' };
                return new DisplayAttribute(attribute, overlayOptions, language);
            }) ?? [];
    }
    get primaryAttribute() {
        const name = this.#bundle.branding?.primaryAttribute;
        return this.getAttribute(name);
    }
    get secondaryAttribute() {
        const name = this.#bundle.branding?.secondaryAttribute;
        return this.getAttribute(name);
    }
    getAttribute(attributeName) {
        if (!attributeName) {
            return undefined;
        }
        return this.attributes.find((attribute) => attribute.name === attributeName);
    }
}
export class DisplayAttribute extends CredentialPreviewAttribute {
    characterEncoding;
    standard;
    format;
    information;
    label;
    constructor(options, overlayOptions, language) {
        super(options);
        this.characterEncoding = overlayOptions.characterEncoding;
        this.standard = overlayOptions.standard;
        this.format = overlayOptions.format;
        this.information = overlayOptions.information?.[language];
        this.label = overlayOptions.label?.[language];
    }
    toJSON() {
        return { ...super.toJSON(), format: this.format, information: this.information, label: this.label };
    }
}
export class CredentialFormatter {
    #credentials;
    constructor(bundle, record) {
        this.#credentials = bundle.languages.reduce((credentials, language) => {
            credentials[language] = new LocalizedCredential(bundle, record, language);
            return credentials;
        }, {});
    }
    localizedCredential(language) {
        return this.#credentials[language];
    }
}
