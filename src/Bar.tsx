import {SerializedStyles} from "@emotion/react";

interface BarProps {
  data?: number;
  barHeight: number;
  barStyles?: SerializedStyles;
  barsElementsStyles?: SerializedStyles;
  barsHiddenElementsStyles?: SerializedStyles;
}

const Bar = ({ data, barHeight, barStyles, barsElementsStyles, barsHiddenElementsStyles }: BarProps) => {
  if (data === undefined || !(data >=0 && data <= 1)) {
    console.error('react-equalizer: Invalid bar data (`' + data + "`) - must be a number between 0 and 1");
    return <div/>;
  }

  const barsElementsCount = barHeight * data;

  return (
    <div className="bar" css={barStyles}>
      {[...Array(barHeight)].map((_, key) => {
        const show = key < barsElementsCount;
        return(
          <div key={key} css={show? barsElementsStyles : barsHiddenElementsStyles}/>
        )
      })}
    </div>
  )
}

export default Bar;