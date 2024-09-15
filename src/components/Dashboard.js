import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale, // Register the category scale
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register all necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ data }) => {
  const chartRef = useRef(null); // Create a reference for the chart

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.temperature,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Energy Consumption (kWh)',
        data: data.energy,
        borderColor: '#742774',
        fill: false,
      },
    ],
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      // Clean up chart on component unmount
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">Real-Time Monitoring</h2>
      <Line ref={chartRef} data={chartData} />
    </div>
  );
};

export default Dashboard;
