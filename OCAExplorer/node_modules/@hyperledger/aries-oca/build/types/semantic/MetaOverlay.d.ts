import { IMetaOverlayData } from '../../interfaces/data';
import BaseOverlay from '../base/BaseOverlay';
export default class MetaOverlay extends BaseOverlay {
    #private;
    language: string;
    name: string;
    description: string;
    issuer: string;
    constructor(overlay: IMetaOverlayData);
    get credentialHelpText(): string;
    get credentialSupportUrl(): string;
    get issuerDescription(): string;
    get issuerUrl(): string;
}
