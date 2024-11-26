import { ILabelOverlayData } from '../../interfaces/data';
import BaseOverlay from '../base/BaseOverlay';
export default class LabelOverlay extends BaseOverlay {
    #private;
    language: string;
    constructor(overlay: ILabelOverlayData);
    get attributeLabels(): Record<string, string>;
    get attributeCategories(): string[];
    get categoryLabels(): Record<string, string>;
}
