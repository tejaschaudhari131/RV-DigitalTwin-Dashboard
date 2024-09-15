import React from 'react';

const PredictiveMaintenance = ({ maintenanceTasks }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Predictive Maintenance</h3>
      <ul className="space-y-2">
        {maintenanceTasks.map((task, index) => (
          <li key={index} className="flex justify-between">
            <span>{task.name}</span>
            <span className="text-red-500">{task.dueIn}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PredictiveMaintenance;
