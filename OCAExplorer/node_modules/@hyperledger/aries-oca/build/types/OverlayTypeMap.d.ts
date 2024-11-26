import BaseOverlay from './base/BaseOverlay';
import BrandingOverlay from './branding/BrandingOverlay';
declare const OverlayTypeMap: Map<string, typeof BaseOverlay | typeof BrandingOverlay>;
export default OverlayTypeMap;
