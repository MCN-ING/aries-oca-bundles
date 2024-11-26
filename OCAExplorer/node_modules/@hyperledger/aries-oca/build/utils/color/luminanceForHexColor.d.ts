/**
 * Converts a hexidecimal color string into a luminance value
 * @param hex color string in hexidecimal format
 * @returns { number | undefined } between 0 and 255
 */
declare const luminanceForHexColor: (hex: string) => number | undefined;
export default luminanceForHexColor;
