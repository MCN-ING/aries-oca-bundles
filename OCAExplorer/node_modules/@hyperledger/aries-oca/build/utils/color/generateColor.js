import hashCode from './hashCode';
import hashToRGBA from './hashToRGBA';
const generateColor = (seed) => {
    return hashToRGBA(hashCode(seed));
};
export default generateColor;
