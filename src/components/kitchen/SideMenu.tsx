import { personIcon } from "@/utils/Icons";
import Image from "next/image";

export default function SideMenuKitchen(){
    return (
        <div>
            <div className="w-[180px] h-screen border-r border-gray-400">
                <ul className="h-full py-5 px-2 flex flex-col  justify-between">
                    <li><Image src={'/logo.png'} width={140} height={40} alt="logo"/></li>
                    <li className="text-6xl">{personIcon}</li>
                </ul>
            </div>
        </div>
    )
}