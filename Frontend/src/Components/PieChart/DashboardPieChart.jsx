import {
  Chart as ChartJS, ArcElement, Tooltip, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  layouts
} from "chart.js";
import { Pie} from 'react-chartjs-2';

const DashboardPieChart = () => {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      ArcElement
    )
    // Removed Legend 
  
    const pieChartData = {
      labels: ['Happy', 'Excited', 'Neutral', 'Stressed', 'Sad'],
      datasets: [
        {
          label: 'Mood',
          data: [10, 10, 10, 10, 10],
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
    };
  
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
      radius:"90%"
    };
  
    return (
      <Pie data={pieChartData} options={pieChartOptions} />
    )
  }


export default DashboardPieChart