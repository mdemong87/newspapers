"use client";
import React, { useState } from "react";

const Location = ({ items }) => {

  
  const [selectedCity, setSelectedCity] = useState(items[0]?.name || "");
  const defaultSelectedArea = items.find(city => city.name === selectedCity)?.areas.find(area => area.selected)?.name || "";
  const [selectedArea, setSelectedArea] = useState(defaultSelectedArea);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    const defaultSelectedArea = items.find(city => city.name === e.target.value)?.areas.find(area => area.selected)?.name || "";
    setSelectedArea(defaultSelectedArea);
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 gap-2 mb-4">
      <div>
        <p>
        Location
        </p>
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none"
        >
          {items.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCity && (
        <select
          value={selectedArea}
          onChange={handleAreaChange}
          className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none"
        >
          {items
            .find((city) => city.name === selectedCity)
            ?.areas.map((area) => (
              <option key={area.name} value={area.name}>
                {area.name}
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

export default Location;
