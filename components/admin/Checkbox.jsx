"use client";
import React, { useState } from 'react';


const Checkbox = ({ title, items }) => {


  const initializeCheckedState = (items) =>{
    items.map(item => !!item.checked);
  }
    

  const [checkedItems, setCheckedItems] = useState(initializeCheckedState(items));
  const [subCheckedItems, setSubCheckedItems] = useState(
    items.map(item => (item.subItems ? initializeCheckedState(item.subItems) : []))
  );

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleSubCheckboxChange = (mainIndex, subIndex) => {
    const newSubCheckedItems = [...subCheckedItems];
    newSubCheckedItems[mainIndex][subIndex] = !newSubCheckedItems[mainIndex][subIndex];
    setSubCheckedItems(newSubCheckedItems);
  };


  console.log(checkedItems);

  return (
    <div className='my-2'>
      <p>{title}</p>
      <div className='w-full bg-white p-2 overflow-y-auto max-h-60 mt-2 rounded-md'>
        {items.map((item, index) => (
          <div key={index}>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index)}
                className="form-checkbox h-5 w-5 mr-1 text-blue-600"
              />
              <span>{item.title}</span>
            </label>
            {item.subItems && (
              <div className='ml-6'>
                {item.subItems.map((subItem, subIndex) => (
                  <label key={subIndex} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={subCheckedItems[index][subIndex]}
                      onChange={() => handleSubCheckboxChange(index, subIndex)}
                      className="form-checkbox h-4 w-4 mr-1 text-green-600"
                    />
                    <span>{subItem.title}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;