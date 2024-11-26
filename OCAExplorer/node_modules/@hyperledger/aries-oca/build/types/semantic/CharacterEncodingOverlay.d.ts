import { ICharacterEncodingOverlayData } from '../../interfaces/data';
import BaseOverlay from '../base/BaseOverlay';
export default class CharacterEncodingOverlay extends BaseOverlay {
    #private;
    constructor(overlay: ICharacterEncodingOverlayData);
    get defaultCharacterEncoding(): string;
    get attrCharacterEncoding(): Record<string, string>;
    get attributeCharacterEncoding(): Record<string, string>;
}
