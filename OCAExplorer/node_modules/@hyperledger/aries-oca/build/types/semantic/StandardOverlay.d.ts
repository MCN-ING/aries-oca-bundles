import { IStandardOverlayData } from '../../interfaces/data';
import BaseOverlay from '../base/BaseOverlay';
export default class StandardOverlay extends BaseOverlay {
    #private;
    constructor(overlay: IStandardOverlayData);
    get attrStandards(): Record<string, string>;
    get attributeStandards(): Record<string, string>;
}
