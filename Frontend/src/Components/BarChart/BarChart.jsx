import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { forwardRef, useMemo } from "react";
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Filler);

const BarChart = forwardRef(({ barChartPassedData, activeTab }, ref) => {

  const barData = useMemo(() => {
    if (!barChartPassedData || barChartPassedData.length === 0)
      return {
        labels: [],
        datasets: [
          {
            label: "Energy Level",
            data: [],
            backgroundColor: "rgba(54, 162, 235, 0.7)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
          },
        ],
      };

    let data;
    let labels;

    if (activeTab === 'weekly') {
      const sorted = [...barChartPassedData].sort(
        (a, b) => new Date(a.day) - new Date(b.day)
      );

      labels = sorted.map((item) =>
        new Date(item.day).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      );
      data = sorted.map((item) => item.value);
    } else if (activeTab === 'monthly') {
      const sorted = [...barChartPassedData].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

      let monthCounters = {};
      labels = sorted.map(item => {
        const date = new Date(item.startDate);
        const month = date.toLocaleDateString("en-US", { month: "short" });
        if (!monthCounters[month]) monthCounters[month] = 1;
        const weekNum = monthCounters[month]++;
        return `${month} Week ${weekNum}`;
      });

      data = sorted.map(item => item.value);
    }

    return {
      labels: labels,
      datasets: [
        {
          label: "Energy Level",
          data: data,
          backgroundColor: "rgba(54, 162, 235, 0.7)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
        },
      ],
    }

  }, [barChartPassedData, activeTab]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
        text: "Energy Levels",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
        },
        title: {
          display: true,
          text: "Energy Level (0 = Low, 10 = High)",
          font: {
            family: "sans-serif",
            size: 14,
            weight: "500",
          },
          color: "#1F2937",
        },
      },
    },
  };

  return <Bar ref={ref} data={barData} options={options} />;
});

export default BarChart;