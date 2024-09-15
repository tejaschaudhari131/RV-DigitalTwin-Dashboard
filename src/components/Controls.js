import React, { useState } from 'react';

const Controls = ({ onUpdate }) => {
  const [temperature, setTemperature] = useState(22);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(temperature);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Control HVAC</h3>
      <div className="flex space-x-4 items-center">
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
          Set Temperature
        </button>
      </div>
    </form>
  );
};

export default Controls;
