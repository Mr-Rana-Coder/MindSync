import { forwardRef } from "react";
import ReactSpeedometer from "react-d3-speedometer";

const GaugeChart = forwardRef(({ gaugeChartPassedData }, ref) => {

  return (
    <div ref={ref}>
    <ReactSpeedometer
      maxValue={10}
      value={gaugeChartPassedData}
      needleColor="black"
      segments={5}
      segmentColors={["green", "yellowgreen", "orange", "red", "darkred"]}
      height={250}
      width={450}
      customSegmentLabels={[
        {
          text: "Very Low",
          position: "OUTSIDE",
          color: "#374151",
        },
        {
          text: "Low",
          position: "OUTSIDE",
          color: "#374151",
        },
        {
          text: "Medium",
          position: "OUTSIDE",
          color: "#374151",
        },
        {
          text: "High",
          position: "OUTSIDE",
          color: "#374151",
        },
        {
          text: "Very High",
          position: "OUTSIDE",
          color: "#374151",
        },
      ]}
    />
    </div>
  );
});

export default GaugeChart;
