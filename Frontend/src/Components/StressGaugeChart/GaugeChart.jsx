import ReactSpeedometer from "react-d3-speedometer";

const GaugeChart = () => {
  return (
    <ReactSpeedometer
      maxValue={10}
      value={3}
      needleColor="black"
      segments={5}
      segmentColors={["green", "yellowgreen", "orange", "red", "darkred"]}
      height={250}
      width={400}
    />
  );
};

export default GaugeChart;
