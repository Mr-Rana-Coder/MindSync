import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler
} from "chart.js";
import { forwardRef, useMemo } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Filler
);

const DashboardLineChart = forwardRef(({ lineChartPassedData, activeTab },ref) => {
    const lineChartData = useMemo(() => {
        if (!lineChartPassedData || lineChartPassedData.length === 0) {
            return {
                labels: [],
                datasets: [
                    {
                        label: "Mood Score",
                        data: [],
                    },
                ],
            };
        }

        let labels, data;
        if (activeTab === "weekly") {
            const sorted = [...lineChartPassedData].sort(
                (a, b) => new Date(a.day) - new Date(b.day)
            );

            labels = sorted.map((item) =>
                new Date(item.day).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                })
            );
            data = sorted.map((item) => item.value);
        } else if (activeTab === "monthly") {
            const sorted = [...lineChartPassedData].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

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
            labels,
            datasets: [
                {
                    label: "Mood Score",
                    data,
                    fill: true,
                    backgroundColor: "rgba(54, 162, 235, 0.12)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    tension: 0.3,
                },
            ],
        };
    }, [lineChartPassedData, activeTab]);

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 800,
            easing: "easeInOutQuad",
        },
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
                ticks: { stepSize: 2 },
                title: {
                    display: true,
                    text: "Mood Level (0 = Low, 10 = High)",
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

    return <Line ref={ref} data={lineChartData} options={lineChartOptions} />;
});

export default DashboardLineChart;
