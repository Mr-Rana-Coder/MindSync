import { useMemo } from "react";
import ReactSpeedometer from "react-d3-speedometer";

const GaugeChart = ({ gaugeChartPassedData }) => {

  return (
    <ReactSpeedometer
      maxValue={10}
      value={gaugeChartPassedData}
      needleColor="black"
      segments={5}
      segmentColors={["green", "yellowgreen", "orange", "red", "darkred"]}
      height={250}
      width={400}
    />
  );
};

export default GaugeChart;
