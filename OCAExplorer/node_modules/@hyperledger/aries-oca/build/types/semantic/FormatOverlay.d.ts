import { IFormatOverlayData } from '../../interfaces/data';
import BaseOverlay from '../base/BaseOverlay';
export default class FormatOverlay extends BaseOverlay {
    #private;
    constructor(overlay: IFormatOverlayData);
    get attributeFormats(): Record<string, string>;
}
