import OverlayTypeMap from '../OverlayTypeMap';
import BaseOverlay from '../base/BaseOverlay';
import BrandingOverlay from '../branding/BrandingOverlay';
import CaptureBase from '../capture-base/CaptureBase';
class OverlayBundle {
    credentialDefinitionId;
    captureBase;
    overlays;
    languages;
    metadata;
    attributes;
    flaggedAttributes;
    constructor(credentialDefinitionId, bundle) {
        this.credentialDefinitionId = credentialDefinitionId;
        this.captureBase = new CaptureBase(bundle.capture_base);
        this.overlays = bundle.overlays
            .filter((overlay) => overlay.type !== 'aries/overlays/branding/1.0')
            .map((overlay) => {
            const OverlayClass = (OverlayTypeMap.get(overlay.type) || BaseOverlay);
            return new OverlayClass(overlay);
        });
        this.overlays.push(...bundle.overlays
            .filter((overlay) => overlay.type === 'aries/overlays/branding/1.0')
            .map((overlay) => {
            const OverlayClass = (OverlayTypeMap.get(overlay.type) || BrandingOverlay);
            return new OverlayClass(credentialDefinitionId, overlay);
        }));
        this.languages = this.#processLanguages();
        this.metadata = this.#processMetadata();
        this.attributes = this.#processOverlayAttributes();
        this.flaggedAttributes = this.attributes.filter((attribute) => this.captureBase.flaggedAttributes.includes(attribute.name));
    }
    get branding() {
        return this.#overlaysForType('aries/overlays/branding/1.0')[0];
    }
    getAttribute(name) {
        return this.attributes.find((attribute) => attribute.name === name);
    }
    getFlaggedAttribute(name) {
        return this.flaggedAttributes.find((attribute) => attribute.name === name);
    }
    #processMetadata() {
        const metadata = {
            name: {},
            description: {},
            credentialHelpText: {},
            credentialSupportUrl: {},
            issuer: {},
            issuerDescription: {},
            issuerUrl: {},
        };
        for (const overlay of this.#overlaysForType('spec/overlays/meta/1.0')) {
            const language = overlay.language ?? 'en';
            const { name, description, credentialHelpText, credentialSupportUrl, issuer, issuerDescription, issuerUrl } = overlay;
            if (name) {
                metadata.name[language] = name;
            }
            if (description) {
                metadata.description[language] = description;
            }
            if (credentialHelpText) {
                metadata.credentialHelpText[language] = credentialHelpText;
            }
            if (credentialSupportUrl) {
                metadata.credentialSupportUrl[language] = credentialSupportUrl;
            }
            if (issuer) {
                metadata.issuer[language] = issuer;
            }
            if (issuerDescription) {
                metadata.issuerDescription[language] = issuerDescription;
            }
            if (issuerUrl) {
                metadata.issuerUrl[language] = issuerUrl;
            }
        }
        return metadata;
    }
    #processLanguages() {
        const languages = [];
        for (const overlay of this.#overlaysForType('spec/overlays/meta/1.0')) {
            const language = overlay.language;
            if (language && !languages.includes(language)) {
                languages.push(language);
            }
        }
        languages.sort((a, b) => a.localeCompare(b));
        return languages;
    }
    #processOverlayAttributes() {
        const attributes = [];
        const attributeMap = new Map(Object.entries(this.captureBase.attributes));
        for (const [name, type] of attributeMap) {
            attributes.push({
                name,
                type,
                information: this.#processInformationForAttribute(name),
                label: this.#processLabelForAttribute(name),
                characterEncoding: this.#processCharacterEncodingForAttribute(name),
                standard: this.#processStandardForAttribute(name),
                format: this.#processFormatForAttribute(name),
            });
        }
        return attributes;
    }
    #processInformationForAttribute(key) {
        const information = {};
        for (const overlay of this.#overlaysForType('spec/overlays/information/1.0')) {
            if (overlay.attributeInformation?.[key]) {
                const language = overlay.language ?? 'en';
                information[language] = overlay.attributeInformation[key];
            }
        }
        return information;
    }
    #processLabelForAttribute(key) {
        const label = {};
        for (const overlay of this.#overlaysForType('spec/overlays/label/1.0')) {
            if (overlay.attributeLabels?.[key]) {
                const language = overlay.language ?? 'en';
                label[language] = overlay.attributeLabels[key];
            }
        }
        return label;
    }
    #processCharacterEncodingForAttribute(key) {
        for (const overlay of this.#overlaysForType('spec/overlays/character_encoding/1.0')) {
            if (overlay.attributeCharacterEncoding?.[key]) {
                return overlay.attributeCharacterEncoding[key];
            }
        }
        return;
    }
    #processStandardForAttribute(key) {
        for (const overlay of this.#overlaysForType('spec/overlays/standard/1.0')) {
            if (overlay.attributeStandards?.[key]) {
                return overlay.attributeStandards[key];
            }
        }
        return;
    }
    #processFormatForAttribute(key) {
        for (const overlay of this.#overlaysForType('spec/overlays/format/1.0')) {
            if (overlay.attributeFormats?.[key]) {
                return overlay.attributeFormats[key];
            }
        }
        return;
    }
    #overlaysForType(type) {
        return this.overlays.filter((overlay) => overlay.type === type);
    }
}
export default OverlayBundle;
