import Bar from "./Bar.tsx";

interface EqualizerProps {
  data?: number[];
  barHeight?: number;
}

const Equalizer = ({ data, barHeight = 10 }: EqualizerProps) => {
  if (!data || data.length === 0) {
    console.error('react-equalizer: Data is empty');
    return <div/>;
  }

  return (
    <div className="container">
      {data.map((value, index) => {
        return (
          <Bar data={value} key={index} barHeight={barHeight} />
        )
      })}
    </div>
  )
}

export default Equalizer;