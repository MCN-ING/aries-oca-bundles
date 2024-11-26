export default class CaptureBase {
    #flagged_attributes;
    type;
    classification;
    attributes;
    digest;
    constructor(captureBase) {
        this.type = captureBase.type;
        this.classification = captureBase.classification;
        this.attributes = captureBase.attributes;
        this.#flagged_attributes = captureBase.flagged_attributes;
        this.digest = captureBase.digest ?? '';
    }
    get flaggedAttributes() {
        return this.#flagged_attributes;
    }
}
