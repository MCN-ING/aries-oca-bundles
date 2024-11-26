import { IOverlayBundleData } from '../../interfaces/data';
import { IOverlayBundleAttribute, IOverlayBundleMetadata } from '../../interfaces/overlay';
import BaseOverlay from '../base/BaseOverlay';
import BrandingOverlay from '../branding/BrandingOverlay';
import CaptureBase from '../capture-base/CaptureBase';
declare class OverlayBundle {
    #private;
    credentialDefinitionId: string;
    captureBase: CaptureBase;
    overlays: BaseOverlay[];
    languages: string[];
    metadata: IOverlayBundleMetadata;
    attributes: IOverlayBundleAttribute[];
    flaggedAttributes: IOverlayBundleAttribute[];
    constructor(credentialDefinitionId: string, bundle: IOverlayBundleData);
    get branding(): BrandingOverlay | undefined;
    getAttribute(name: string): IOverlayBundleAttribute | undefined;
    getFlaggedAttribute(name: string): IOverlayBundleAttribute | undefined;
}
export default OverlayBundle;
