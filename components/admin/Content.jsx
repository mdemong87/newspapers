"use client";
import React, { useState } from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { useStore } from '@/lib/store';



const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const Content= () => {



  const dis = useStore((state) => state.dis);
    const setdis = useStore((state) => state.setdis);



  function handleChange(content){
    setdis(content);
  }


      return (
      <SunEditor onChange={(e)=>handleChange(e)} />
    );
};

export default Content;
