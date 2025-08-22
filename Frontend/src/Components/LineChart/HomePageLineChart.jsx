import {
    Chart as ChartJS, ArcElement, Tooltip, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend
} from "chart.js";
import { Pie, Line } from 'react-chartjs-2';

const HomePageLineChart = () => {

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

    const lineChartData = {
        labels: ["Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12", "Aug 13", "Today"],
        datasets: [
            {
                label: "Mood Score",
                data: [0, 2, -2, 2, -2, -3, 1],
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.12)",
                borderColor: "rgba(54, 162, 235, 1)",
                tension: 0.3,
            },
        ],
    }

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Overall Mood Score Timeline",
            },
        },
        scales: {
            y: {
                suggestedMin: -3.5,
                suggestedMax: 3.5,
                ticks: { stepSize: 2 },
            },
        },
    };

    return (
        <Line data={lineChartData} options={lineChartOptions} />
    )
}

export default HomePageLineChart