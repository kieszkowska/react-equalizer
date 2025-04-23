import Bar from "./Bar.tsx";
import {CSSProperties} from "react";

interface EqualizerProps {
  data?: number[];
  barHeight?: number;
  containerStyles?: CSSProperties;
  barStyles?: CSSProperties;
  barsElementsStyles?: CSSProperties;
  barsHiddenElementsStyles?: CSSProperties;
}

const defaultContainerStyles: CSSProperties = {
  display: "flex"
}

const defaultBarStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column-reverse"
}

const defaultBarsElementsStyles: CSSProperties = {
  backgroundColor: "#007bff",
  width: "40px",
  height: "10px",
  margin: "3px",
}

const defaultBarsHiddenElementsStyles: CSSProperties = {
  ...defaultBarStyles,
  background: "transparent",
}

const Equalizer = ({
  data,
  barHeight = 10,
  containerStyles,
  barStyles,
  barsElementsStyles,
  barsHiddenElementsStyles,
}: EqualizerProps) => {
  if (!data || data.length === 0) {
    console.error('react-equalizer: Data is empty');
    return <div/>;
  }

  return (
    <div className="container" style={{...defaultContainerStyles, ...containerStyles}}>
      {data.map((value, index) => {
        return (
          <Bar
            barHeight={barHeight}
            barStyles={{...defaultBarStyles, ...barStyles}}
            barsElementsStyles={{...defaultBarsElementsStyles, ...barsElementsStyles}}
            barsHiddenElementsStyles={{...defaultBarsHiddenElementsStyles, ...barsHiddenElementsStyles}}
            data={value}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default Equalizer;