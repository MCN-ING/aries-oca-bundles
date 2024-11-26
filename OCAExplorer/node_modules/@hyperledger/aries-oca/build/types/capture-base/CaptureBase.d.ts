import { ICaptureBaseData } from '../../interfaces/data';
export default class CaptureBase {
    #private;
    type: string;
    classification: string;
    attributes: Record<string, string>;
    digest: string;
    constructor(captureBase: ICaptureBaseData);
    get flaggedAttributes(): string[];
}
