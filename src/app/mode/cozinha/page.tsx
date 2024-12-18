'use client'


import SideMenuKitchen from "@/components/kitchen/SideMenu";
import { Slider } from "@/components/Slider";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Partial from "./partial";
import { deviceRotate } from "@/utils/Icons";

export default function Waiter(){

    const[mode, setMode] = useState('')
    const[orientation, setOrientation] = useState('landscape-primary')
  
    const detectOrientation = () => {
      const type = screen.orientation.type
      if(type.startsWith('portrait')){
        setOrientation('portrait')
      }else if(type.startsWith('landscape')){
        setOrientation('landscape')
      }
    }

    useEffect(()=>{
      detectOrientation()

      screen.orientation.addEventListener('change', detectOrientation)

      return () => {
        screen.orientation.removeEventListener('change', detectOrientation)
      }
    },[])
    

    
      return orientation !== 'landscape' ? (
        <div className="flex flex-col gap-5 items-center justify-center p-5 h-screen w-full">
          <h1 className="text-white text-center text-xl">Esse modo funciona melhor com o dispositivo em landscape.</h1>
            <p className="text-7xl text-white">{deviceRotate}</p>
        </div>
      ) : (


        <div className="flex w-full h-full bg-white">
            <div>
              <SideMenuKitchen/>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="flex justify-center w-full p-5 ">
                <Slider setMode={(v)=>setMode(v)} mode={mode}/>
              </div>
              <Partial mode={mode}/>
            </div>
          
        </div>
      )
  }