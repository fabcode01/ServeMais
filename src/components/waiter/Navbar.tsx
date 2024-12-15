'use client'

import { menuIcon,personIcon } from "@/utils/Icons"
import SideMenu from "./SideMenu"
import { useState } from "react"


export default function Navbar(){
    const[MenuShow, setMenuShow] = useState(false)

    return (
        <nav>
            <ul className="flex items-center justify-between">
                <li onClick={()=>setMenuShow(true)} className="text-4xl text-orange-main cursor-pointer select-none">{menuIcon}</li>
                <li className="flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full text-5xl">
                    {personIcon}
                </li>
            </ul>

            <SideMenu stateMenu={MenuShow} disableMenu={()=>setMenuShow(false)}/>

        </nav>
    )
}