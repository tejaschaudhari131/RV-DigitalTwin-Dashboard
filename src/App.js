import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SystemPanel from './components/SystemPanel';
import PredictiveMaintenance from './components/PredictiveMaintenance';
import Controls from './components/Controls';

const App = () => {
  const [data, setData] = useState({
    labels: [],
    temperature: [],
    energy: [],
    fuelLevel: [],
    battery: []
  });

  const [maintenanceTasks, setMaintenanceTasks] = useState([
    { name: 'Oil Change', dueIn: '500 miles' },
    { name: 'Filter Replacement', dueIn: '30 days' },
  ]);

  // Simulate real-time data updates for multiple systems
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      const newTemperature = (20 + Math.random() * 10).toFixed(2); // Simulated temperature (20°C - 30°C)
      const newEnergy = (50 + Math.random() * 20).toFixed(2); // Simulated energy consumption (50kWh - 70kWh)
      const newFuelLevel = (70 + Math.random() * 10).toFixed(2); // Simulated fuel level (70% - 80%)
      const newBattery = (80 + Math.random() * 5).toFixed(2); // Simulated battery percentage (80% - 85%)

      setData((prevData) => ({
        labels: [...prevData.labels.slice(-9), newTime], // Keep only the last 10 entries
        temperature: [...prevData.temperature.slice(-9), newTemperature],
        energy: [...prevData.energy.slice(-9), newEnergy],
        fuelLevel: [...prevData.fuelLevel.slice(-9), newFuelLevel],
        battery: [...prevData.battery.slice(-9), newBattery],
      }));
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const handleHVACUpdate = (temp) => {
    console.log(`HVAC temperature set to ${temp}°C`);
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <Header />
        <main className="p-4 space-y-6">
          <Dashboard data={data} />
          <SystemPanel
            title="Engine"
            metrics={[
              { label: 'Fuel Level', value: `${data.fuelLevel[data.fuelLevel.length - 1]}%` || 'N/A' },
              { label: 'Battery', value: `${data.battery[data.battery.length - 1]}%` || 'N/A' },
            ]}
          />
          <PredictiveMaintenance maintenanceTasks={maintenanceTasks} />
          <Controls onUpdate={handleHVACUpdate} />
        </main>
      </div>
    </div>
  );
};

export default App;
