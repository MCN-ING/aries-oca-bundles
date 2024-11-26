import { IBaseOverlayData } from '../../interfaces/data';
export default class BaseOverlay {
    #private;
    type: string;
    digest: string;
    constructor(overlay: IBaseOverlayData);
    get captureBase(): string;
}
