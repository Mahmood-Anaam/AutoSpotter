import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");
export const WIDTH = width;
export const HEIGHT = height;
//Guidelines Base Values base on standard ~5" screen mobile device
const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;

export const horizontalScale = (size) => (width / guidelineBaseWidth) * size;

export const verticalScale = (size) => (height / guidelineBaseHeight) * size;

export const normalizeFontSize = (size) => {
  return PixelRatio.roundToNearestPixel(size * (height / guidelineBaseHeight));
};

export const scaleBorder = (num) => {
  const scaleFactor = Math.min(
    width / guidelineBaseWidth,
    height / guidelineBaseHeight
  );
  return num * scaleFactor;
};
