import { IBrandingOverlayData } from '../../interfaces/data';
import BaseOverlay from '../base/BaseOverlay';
export default class BrandingOverlay extends BaseOverlay {
    #private;
    logo: string;
    constructor(credentialDefinitionId: string, overlay: IBrandingOverlayData);
    get backgroundImage(): string;
    get backgroundImageSlice(): string;
    get primaryBackgroundColor(): string;
    get secondaryBackgroundColor(): string;
    get primaryAttribute(): string;
    get secondaryAttribute(): string;
    get issuedDateAttribute(): string;
    get expiryDateAttribute(): string;
}
