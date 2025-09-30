import {
  Chart as ChartJS, ArcElement, Tooltip, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";
import { useMemo } from "react";
import { Pie } from 'react-chartjs-2';

const HomePagePieChart = ({ activeTab }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  )

  const pieChartData = useMemo(() => {
    const pieData = activeTab === "weekly" ? [5, 15, 20, 19, 10] : [9, 18, 11, 6, 21];

    return {
      labels: ['Happy', 'Excited', 'Neutral', 'Stressed', 'Sad'],
      datasets: [
        {
          label: 'Mood',
          data: pieData,
          backgroundColor: [
            'rgba(229, 231, 235, 1)',
            'rgba(209, 213, 219, 1)',
            'rgba(75, 85, 99, 1)',
            'rgba(107, 114, 128, 1)',
            'rgba(31, 41, 55, 1)',
          ],
          borderColor: [
            'rgba(229, 231, 235, 0.7)',
            'rgba(209, 213, 219, 0.7)',
            'rgba(156, 163, 175, 0.7)',
            'rgba(107, 114, 128, 0.7)',
            'rgba(75, 85, 99, 0.7)',
          ],
          borderWidth: 0.5,
        },
      ],
    };
  }, [activeTab]);

  const pieChartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 24,
          usePointStyle: true,
        },
      },
    },
    maintainAspectRatio: false,
    radius: "90%"
  };

  return (
    <Pie data={pieChartData} options={pieChartOptions} />
  )
}

export default HomePagePieChart