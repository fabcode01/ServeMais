import SideMenuKitchen from "@/components/kitchen/SideMenu";
import { Slider } from "@/components/Slider";
import { motion } from "motion/react";

export default function Waiter(){

    
      return (
        <div className="flex">
            <div>
              <SideMenuKitchen/>
            </div>

            <div className="flex justify-center w-full p-5 ">
              <Slider/>
            </div>
          
        </div>
      )
  }