"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';



const Photo= ({ title, img }) => {
  
  // from use store 
  const photo = useStore((state) => state.photo);
    const setphoto = useStore((state) => state.setphoto);



  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setphoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (img) {
      setphoto(img);
    }
  }, [img]);

  return (
    <div className='w-full'> 
      <p className='flex items-center justify-between'>
        <span>{title}</span>
        <span>{photo ? 'Image selected' : ''}</span>
      </p>
      <div className="flex flex-col items-center my-2 relative">
        <label htmlFor="photoInput" className="cursor-pointer w-full flex items-center justify-center">
          {photo ? (
            <Image
              src={photo}
              width={600}
              height={600}
              alt="Selected"
              className="bg-white p-2 max-w-full h-auto"
            />
          ) : (
            <div className='p-4 bg-white w-full'>
              <div className='border-2 border-gray-500 text-gray-500 border-dashed flex flex-col items-center justify-center p-5 w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-6-6h12"/></svg>
                <p>
                Click to upload
                </p>
              </div>
            </div>
          )}
          <input
            id="photoInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Photo;