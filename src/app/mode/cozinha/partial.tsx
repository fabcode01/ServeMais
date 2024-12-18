'use client'

import { personIcon, titlePedidosIcon } from "@/utils/Icons";
import { motion } from "motion/react";
import { useState } from "react";


interface PartialProps {
    mode?: string
}

export default function Partial(props: PartialProps) {
    const[user, setUser] = useState('prepare')

  return (
    <div className="w-4/5 h-[800px] border p-5 rounded-lg overflow-clip min-w-[735px]">
        <h2 className=" flex items-center text-4xl font-semibold gap-2">Pedidos <span className="text-orange-main">{titlePedidosIcon}</span></h2>

      <ul className="flex gap-5 flex-col items-center mt-5">
        
        <motion.div
        initial={{translateX: 80}}
        animate={{translateX: 0}}
        className="flex items-center justify-around gap-5 w-[50%]  h-auto bg-gray-300 px-5 py-10 rounded-lg min-w-[660px]">
            <span className="text-5xl">
                {personIcon}
            </span>
            |
            <div>
                x<span className="text-2xl font-semibold">5</span>
            </div>
            |
            <span className="w-[220px] overflow-auto">
                Salada com molho extra
            </span>
            |

            <div className="overflow-hidden">

            
                      <motion.div 
                      initial={{opacity: 0, scale: 0}}
                      animate={{opacity: 1, scale: 1}}
                      transition={{
                          duration: 0.4,
                          scale: {type: 'spring', visualDuration: 0.4, bounce: 0}
                      }}
      
                      exit={{translateY: 60}}
                      onClick={()=>setUser('ready')}
                      className={`${user === 'prepare' ? 'bg-green-800' : 'bg-yellow-500'} text-center py-3 w-32 rounded-lg text-white font-bold  cursor-pointer transition-colors duration-700 select-none active:scale-125`}>

                          {user === 'prepare' ? 'Preparar' : 'Concluir'}
                          
                      </motion.div>
             
               
            </div>

        </motion.div>

      </ul>
    </div>
  );
}
