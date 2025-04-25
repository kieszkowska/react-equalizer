import {css, SerializedStyles,} from '@emotion/react'
import {calculateTricolorStyles} from "./utils/calculateTricolorStyles.ts";
import {calculateGradientStyles} from "./utils/calculateGradientStyles.ts";

interface Styles {
  customStyles?: {
    container?: SerializedStyles;
    bar?: SerializedStyles;
    barsElements?: SerializedStyles;
    barsHiddenElements?: SerializedStyles;
  },
  shape: "rectangle" | "circle";
  variant: "solid" | "tricolor" | "gradient";
  color?: string;
  colors?: string[];
  sections: number[];
  barHeight: number;
}

export default function getStyles({customStyles, shape, variant, color, colors, sections, barHeight}: Styles) {
  const defaultContainerStyles = css`
    display: flex;
  `

  const defaultBarStyles = css`
    display: flex;
    flex-direction: column-reverse;
  `

  const defaultBarsElementsStyles = css`
    background-color: #007bff;
    margin: 3px;
  `

  const defaultBarsHiddenElementsStyles = css`
    ${defaultBarStyles};
    background: transparent;
  `

  const rectangleElementsStyles = css`
    width: 30px;
    height: 10px;
  `

  const circleElementsStyles = css`
    width: 10px;
    height: 10px;
    border-radius: 50%;
  `

  const shapeStyle = shape === "circle" ? circleElementsStyles : rectangleElementsStyles;

  let variantStyles: SerializedStyles | SerializedStyles[];

  if (variant === "gradient") {
    variantStyles = calculateGradientStyles(barHeight, colors);
  } else if (variant === "tricolor") {
    variantStyles = calculateTricolorStyles(sections, barHeight, colors);
  } else {
    variantStyles = css`
      background-color: ${color || "#007bff"};
    `
  }

  return {
    containerStyles: css`
      ${defaultContainerStyles}
      ${customStyles?.container}
    `,
    barStyles: css`
      ${defaultBarStyles}
      ${customStyles?.bar}
    `,
    barsElementsStyles: css`
      ${defaultBarsElementsStyles}
      ${shapeStyle}
      ${variantStyles}
      ${customStyles?.barsElements}
    `,
    barsHiddenElementsStyles: css`
      ${defaultBarsHiddenElementsStyles}
      ${shapeStyle}
      ${customStyles?.barsHiddenElements}
    `,
  }
}