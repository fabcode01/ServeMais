'use client'

import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"


interface SideMenuProps {
   stateMenu: boolean
   disableMenu: ()=>void
}

export default function SideMenu(props: SideMenuProps){
  

    return (
        <AnimatePresence>
            {props.stateMenu ? (
                 <motion.div key={'box'} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                 <div onClick={props.disableMenu} className="z-10 absolute top-0 left-0 h-full w-full bg-black opacity-60">
                     
                 </div>
                 <div className={`z-20 absolute top-0 left-0 h-full w-64 bg-yellow-main`}>
                     <div className="flex justify-center">
                             <Image src={'/logo.png'} width={120} height={40} alt="logo" className="cursor-pointer"/>
                         
                     </div>
                 </div>
                </motion.div>

            ):null}
       
        </AnimatePresence>
       
    )
}