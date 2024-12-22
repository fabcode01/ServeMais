'use client'

import { menuIcon,personIcon } from "@/utils/Icons"
import { useState } from "react"
import { Slider } from "../Slider"


export default function Navbar(){

    return (
        <nav>
            <ul className="flex items-center gap-2">
                <li className="flex items-center justify-center w-12 h-12 bg-blue-400 rounded-full text-5xl">
                    {personIcon}
                </li>

                <li className="font-semibold">
                   / Fernanda
                </li>
            </ul>

            <div>
                <Slider className="mt-14"/>
            </div>

          

        </nav>
    )
}