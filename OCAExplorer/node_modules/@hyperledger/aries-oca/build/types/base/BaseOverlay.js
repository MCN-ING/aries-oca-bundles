export default class BaseOverlay {
    #capture_base;
    type;
    digest;
    constructor(overlay) {
        this.type = overlay.type;
        this.#capture_base = overlay.capture_base;
        this.digest = overlay.digest ?? '';
    }
    get captureBase() {
        return this.#capture_base;
    }
}
