import { erroIcon } from "@/utils/Icons";
import { motion } from "motion/react";

interface ErroProps{
    
}


export default function Erro(props: ErroProps){


    return (
        <motion.div
        className={`${''} justify-center gap-5 items-center absolute z-30 top-4 right-5 bg-orange-700 text-white font-semibold w-1/2 h-12 rounded-lg`}
        >   {erroIcon} 
            <h1>Algo deu errado</h1>
        </motion.div>
    )
}