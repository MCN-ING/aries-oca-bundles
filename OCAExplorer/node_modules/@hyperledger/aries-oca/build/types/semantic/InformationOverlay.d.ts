import { IInformationOverlayData } from '../../interfaces/data';
import BaseOverlay from '../base/BaseOverlay';
export default class InformationOverlay extends BaseOverlay {
    #private;
    language: string;
    constructor(overlay: IInformationOverlayData);
    get attributeInformation(): Record<string, string>;
}
