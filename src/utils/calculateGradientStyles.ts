import Gradient from "javascript-color-gradient";
import {css} from "@emotion/react";

export const calculateGradientStyles = (barHeight: number, colors?: string[]) => {
  const gradient = new Gradient();
  gradient.setColorGradient(...(colors || ["#FF4081", "#00E5FF"]));
  const values = gradient.setMidpoint(barHeight).getColors();
  while (values.length < barHeight) {
    // fallback because a gradient library sometimes doesn't return enough colors
    values.push(values[values.length - 1]);
  }
  return values.map((value, index) => {
    return css`
        &:nth-child(${index + 1}) {
          background-color: ${value};
        }
      `
  })
}