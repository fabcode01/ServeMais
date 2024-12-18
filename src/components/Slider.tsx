'use client'

import { allWishIcon, preparationicon, wishReadyIcon } from "@/utils/Icons";

interface SliderProps {
    className?: string
    mode?: string
    setMode?: (v: string) => void
}

export function Slider(props: SliderProps) {
  const listStyle =
    " flex cursor-pointer justify-center items-center gap-2 bg-orange-main text-white font-semibold px-5 py-2 rounded-lg active:scale-110 tooltip md:tooltip-bottom transition-colors duration-400";

   const text = 'hidden md:block' 


   const setMode = (v: string) => {
    
      props.setMode && props.setMode(v)
   }

  return (
    <ul className={`flex h-10 mt-5 justify-center items-center gap-6 w-full ${props.className}`}>
      <li onClick={()=>setMode('all')} className={`${listStyle}  ${props.mode == "all" ? 'bg-orange-800' : ''}`} data-tip='Todos'>
        <span className="text-3xl md:text-lg">{allWishIcon}</span>
        <p className={text}>TODOS</p>
      </li>
      <li onClick={()=>setMode('progress')} className={`${listStyle}  ${props.mode == "progress" ? 'bg-orange-800' : ''}`} data-tip='Preparando'>
      <span className="text-3xl md:text-lg">{preparationicon}</span>
        <p className={text}>EM PREPARAÇÃO</p>
      </li>
      <li onClick={()=>setMode('ready')} className={`${listStyle} ${props.mode == "ready" ? 'bg-orange-800' : ''}`} data-tip='Prontos'>
        <span className="text-3xl md:text-lg">{wishReadyIcon}</span>
        <p className={text}>PRONTOS</p>
      </li>
    </ul>
  );
}
