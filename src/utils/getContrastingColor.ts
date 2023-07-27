import Color from "color";

export const getContrastingColor = (hexColor: string) => {
  const color = Color(hexColor);

  // Check if the color is light or dark based on its luminosity
  const isLightColor = color.luminosity() > 0.5;

  // Adjust the lightness based on the luminosity while preserving the original hue and saturation
  const lightnessFactor = isLightColor ? 0.2 : 0.8;
  const adjustedColor = color.lightness(lightnessFactor * 100);

  // Rotate the hue by 180 degrees for better contrast
  const contrastingColor = adjustedColor.rotate(180).hex();

  return contrastingColor;
};
