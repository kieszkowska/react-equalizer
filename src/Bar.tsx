interface BarProps {
  data?: number;
  barHeight: number;
}

const Bar = ({ data, barHeight }: BarProps) => {
  if (data === undefined || !(data >=0 && data <= 1)) {
    console.error('react-equalizer: Invalid bar data (`' + data + "`) - must be a number between 0 and 1");
    return <div/>;
  }

  const barsElementsCount = barHeight * data;

  return (
    <div className="bar">
      {[...Array(barHeight)].map((_, key) =>
        <div className={`bar-element ${key < barsElementsCount ? "visible" : "hidden"}`} key={key}/>
      )}
    </div>
  )
}

export default Bar;