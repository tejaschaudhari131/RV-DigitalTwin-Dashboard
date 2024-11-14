import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard= ({ data }) => {
  const chartRef = useRef(null);
  const [timeFilter, setTimeFilter] = useState('10min'); // Filter to control the time range

  // Filtered data based on selected time range
  const filteredData = {
    labels: data.labels.slice(-getFilteredDataLength(timeFilter)),
    temperature: data.temperature.slice(-getFilteredDataLength(timeFilter)),
    energy: data.energy.slice(-getFilteredDataLength(timeFilter)),
    fuelLevel: data.fuelLevel.slice(-getFilteredDataLength(timeFilter)),
    battery: data.battery.slice(-getFilteredDataLength(timeFilter)),
  };

  const chartData = {
    labels: filteredData.labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: filteredData.temperature,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Energy Consumption (kWh)',
        data: filteredData.energy,
        borderColor: '#742774',
        fill: false,
      },
      {
        label: 'Fuel Level (%)',
        data: filteredData.fuelLevel,
        borderColor: '#ffcc00',
        fill: false,
      },
      {
        label: 'Battery (%)',
        data: filteredData.battery,
        borderColor: '#36a2eb',
        fill: false,
      },
    ],
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      // Cleanup chart on unmount
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4 space-y-6">
      {/* Summary Panels */}
      <div className="grid grid-cols-4 gap-4">
        <SummaryCard title="Current Temperature" value={`${data.temperature[data.temperature.length - 1]}°C`} />
        <SummaryCard title="Energy Consumption" value={`${data.energy[data.energy.length - 1]} kWh`} />
        <SummaryCard title="Fuel Level" value={`${data.fuelLevel[data.fuelLevel.length - 1]}%`} />
        <SummaryCard title="Battery Level" value={`${data.battery[data.battery.length - 1]}%`} />
      </div>

      {/* Time Range Filter */}
      <div className="flex justify-end space-x-4">
        <button
          className={`p-2 border rounded-lg ${timeFilter === '10min' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setTimeFilter('10min')}
        >
          Last 10 Min
        </button>
        <button
          className={`p-2 border rounded-lg ${timeFilter === '30min' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setTimeFilter('30min')}
        >
          Last 30 Min
        </button>
        <button
          className={`p-2 border rounded-lg ${timeFilter === '1hr' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setTimeFilter('1hr')}
        >
          Last 1 Hour
        </button>
      </div>

      {/* Real-Time Chart */}
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Real-Time Monitoring</h2>
        <Line ref={chartRef} data={chartData} />
      </div>
    </div>
  );
};

// Helper function to get the data length based on time filter
const getFilteredDataLength = (filter) => {
  switch (filter) {
    case '10min':
      return 10; // Last 10 data points
    case '30min':
      return 30; // Last 30 data points
    case '1hr':
      return 60; // Last 60 data points (assuming data every 1 minute)
    default:
      return 10;
  }
};

// Summary Card Component
const SummaryCard = ({ title, value }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-center">
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Dashboard;
