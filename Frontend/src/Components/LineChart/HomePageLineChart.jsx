import {
    Chart as ChartJS, ArcElement, Tooltip, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend
} from "chart.js";
import { useMemo } from "react";
import { Line } from 'react-chartjs-2';

const HomePageLineChart = ({ activeTab }) => {

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

    const lineChartData = useMemo(() => {
        const lineChartLabel = activeTab === "weekly" ? ["Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12", "Aug 13", "Today"] : ["week 1", "week 2", "week 3", "week 4"];
        const lineChartData = activeTab === "weekly" ? [0, 2, 4, 6, 4, 3, 1] : [2, 7, 4, 9];

        return {
            labels: lineChartLabel,
            datasets: [
                {
                    label: "Mood Score",
                    data: lineChartData,
                    fill: true,
                    backgroundColor: "rgba(54, 162, 235, 0.12)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    tension: 0.3,
                },
            ],
        }
    }, [activeTab]);

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
                suggestedMin: 0,
                suggestedMax: 10,
                ticks: { stepSize: 2, },
                title: {
                    display: true,
                    text: "Mood Energy Level (0 = Low, 10 = High)",
                    font: {
                        family: "sans-serif",
                        size: 12,
                        weight: "500",
                    },
                    color: "#1F2937",
                },
            },
        },
    };


    return (
        <Line data={lineChartData} options={lineChartOptions} />
    )
}

export default HomePageLineChart