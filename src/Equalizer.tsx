import Bar from "./Bar.tsx";
import getStyles from "./getStyles.ts";
import {SerializedStyles} from "@emotion/react";

interface EqualizerProps {
  data?: number[];
  barHeight?: number;
  customStyles?: {
    container?: SerializedStyles;
    bar?: SerializedStyles;
    barsElements?: SerializedStyles;
    barsHiddenElements?: SerializedStyles;
  },
  variant?: "solid" | "tricolor" | "gradient";
  shape?: "rectangle" | "circle";
  color?: string;
  colors?: string[];
  sections?: number[];
}

const Equalizer = ({
  data,
  barHeight = 10,
  shape = "rectangle",
  variant = "solid",
  sections = [0, 3, 7],
  ...restProps
}: EqualizerProps) => {
  if (!data || data.length === 0) {
    console.error('react-equalizer: Data is empty');
    return <div/>;
  }

  const {containerStyles, ...rest} = getStyles({shape, variant, sections, barHeight, ...restProps});

  return (
    <div className="container" css={containerStyles}>
      {data.map((value, index) => {
        return (
          <Bar
            barHeight={barHeight}
            data={value}
            key={index}
            {...rest}
          />
        )
      })}
    </div>
  )
}

export default Equalizer;