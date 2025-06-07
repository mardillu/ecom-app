import {
  TextWeight,
  Font,
  TextSize as initTextSize,
  Gutter,
  ImageUrl
} from './global';
import {scale} from 'react-native-size-matters';

let scaledTexts = Object.entries(initTextSize)?.map(size => ({
  [size[0]]: scale(size[1]),
})); //pick up every sinlge font size and scale according to  phone's font size
let refinedScaledTexts: any = {};
for (let refinedText of scaledTexts) {
  refinedScaledTexts = {...refinedScaledTexts, ...refinedText};
}
const TextSize = refinedScaledTexts;

const G = {
  TextWeight,
  Font,
  TextSize,
  Gutter,
  ImageUrl,
} as const;

export default G;
