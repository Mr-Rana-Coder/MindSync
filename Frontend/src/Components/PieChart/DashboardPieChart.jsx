import {
  Chart as ChartJS, ArcElement, Tooltip, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import {  useMemo } from "react";
import { Pie } from 'react-chartjs-2';

const DashboardPieChart = ({ pieChartPassedData }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement
  )

  const pieChartData = useMemo(() => {
    if (!pieChartPassedData) return null;
    const moods = ["Happy", "Excited", "Neutral", "Stressed", "Sad"];
    const dataArray = moods.map(mood => Number(pieChartPassedData[mood] || 0));

    return {
      labels: ['Happy', 'Excited', 'Neutral', 'Stressed', 'Sad'],
      datasets: [
        {
          label: 'Mood',
          data: dataArray,
          backgroundColor: [
            'rgba(229, 231, 235, 1)',
            'rgba(209, 213, 219, 1)',
            'rgba(75, 85, 99, 1)',
            'rgba(107, 114, 128, 1)',
            'rgba(31, 41, 55, 1)',
          ],
          borderColor: [
            'rgba(229, 231, 235, 1)',
            'rgba(209, 213, 219, 1)',
            'rgba(156, 163, 175, 1)',
            'rgba(107, 114, 128, 1)',
            'rgba(75, 85, 99, 1)',
          ],
          borderWidth: 0.5,
        },
      ],
    }
  },[pieChartPassedData]);

  const pieChartOptions = {
    animation: {
      duration: 800,
      animateRotate: true,
      animateScale: true,
    },
    plugins: {
      legend: {
        display: false,
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


export default DashboardPieChart