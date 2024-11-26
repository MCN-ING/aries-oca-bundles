import { CredentialExchangeRecord, CredentialPreviewAttribute, CredentialPreviewAttributeOptions } from '@aries-framework/core';
import { IOverlayBundleAttribute as OverlayBundleAttributeOptions } from '../interfaces/overlay';
import { OverlayBundle } from '../types';
export declare class LocalizedCredential {
    #private;
    issuer: string;
    name: string;
    attributes: DisplayAttribute[];
    constructor(bundle: OverlayBundle, record: CredentialExchangeRecord, language: string);
    get primaryAttribute(): DisplayAttribute | undefined;
    get secondaryAttribute(): DisplayAttribute | undefined;
    getAttribute(attributeName?: string): DisplayAttribute | undefined;
}
export declare class DisplayAttribute extends CredentialPreviewAttribute {
    characterEncoding: string | undefined;
    standard: string | undefined;
    format: string | undefined;
    information: string | undefined;
    label: string | undefined;
    constructor(options: CredentialPreviewAttributeOptions, overlayOptions: OverlayBundleAttributeOptions, language: string);
    toJSON(): Record<string, unknown>;
}
export declare class CredentialFormatter {
    #private;
    constructor(bundle: OverlayBundle, record: CredentialExchangeRecord);
    localizedCredential(language: string): LocalizedCredential | undefined;
}
