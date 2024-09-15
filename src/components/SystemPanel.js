import React from 'react';

const SystemPanel = ({ title, metrics }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title} Status</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-3xl font-bold">{metric.value}</span>
            <span className="text-gray-600">{metric.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemPanel;
