import {css} from "@emotion/react";

export const calculateTricolorStyles = (sections: number[], barHeight: number, colors?: string[]) => {
  if (sections.length !== 3) {
    console.error("react-equalizer: sections must have 3 values, falling back to default");
    sections = [0, 3, 7];
  }

  if (colors?.length !== 3) {
    console.error("react-equalizer: colors must have 3 values, falling back to default");
    colors = ["#E53935", "#FFB300", "#689F38"];
  }

  const variantStyles = [];
  for (let i = 0; i < barHeight; i++) {
    if (i < sections[1]) {
      variantStyles.push(css`
          &:nth-child(${i + 1}) {
            background-color: ${colors?.[0] || "#E53935"};
          }
        `)
    } else if (i < sections[2]) {
      variantStyles.push(css`
          &:nth-child(${i + 1}) {
            background-color: ${colors?.[1] || "#FFB300"};
          }
        `)
    } else {
      variantStyles.push(css`
          &:nth-child(${i + 1}) {
            background-color: ${colors?.[2] || "#689F38"};
          }
        `)
    }
  }

  return variantStyles;
}