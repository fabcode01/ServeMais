'use client'

import Navbar from "@/components/waiter/Navbar";
import { Metadata } from "next";
import FormNewOrder from "./FormNewOrder";
import { useContext, useEffect, useState } from "react";
import Partial from "../cozinha/partial";
import { motion } from "motion/react";
import { personIcon } from "@/utils/Icons";
import { io, Socket } from "socket.io-client";
import { OrderContext } from "@/context/OrderContext";






export default function Waiter(){

  const[formView, setFormView] = useState(false)
  const[pedidos ,setPedidos] = useState<any[]>([])

  const{socket} = useContext(OrderContext)

useEffect(()=>{
  socket?.on('atualizar_lista', (data: any) => {
    setPedidos((current) => [...current, data])
  })


  socket?.on('status_novo', (data:any)=>{
    console.log(data);
    
    setPedidos(data)
  })

  return () => {
    socket?.off('atualizar_lista')
    socket?.off('status_novo')
  }
},[socket])



  const metadata: Metadata = {
    title: 'Garçom',
    description: 'Serve+. Área do garçom.'
  }
  
    return (
      <div className="bg-white h-screen">
        <div className="p-5">
          <Navbar/>
        </div>
        <div>
          <FormNewOrder viewForm={formView} setViewForm={() => setFormView(formView ? false : true)}/>
        </div>

        <div>
        <ul className="flex flex-col gap-2 items-center mt-5">
          {pedidos.map((pedido, i) => (

            <motion.div
            key={pedido.id}
            initial={{translateX: 80}}
            animate={{translateX: 0}}
            className={`flex flex-col justify-center gap-5 w-[50%]  h-auto bg-gray-300 px-5 py-10 rounded-lg min-w-[660px] ${pedido.statusPedido == 'ready' ? 'bg-yellow-400' : ''}`}>
                <div className="flex items-center justify-around gap-5">
                  <span className="text-5xl">
                      {personIcon}
                  </span>
                  |
                  <div>
                      x<span className="text-2xl font-semibold">{pedido.qntd}</span>
                  </div>
                  |
                  <span className="w-[220px] overflow-auto">
                      {pedido.prato}
                  </span>
                </div>
                <div className="flex justify-between">
                  <div>
                    Observação: <span className="text-orange-main font-bold italic">{pedido.descAdd}</span>
                  </div>
                  <div>
                    Status: <span className="font-bold">{pedido.statusPedido == 'prepare' ? 'Aguardando cozinha' : 'Preparando'}</span>
                  </div>
                </div>
            </motion.div>
    
          ))}
        
      </ul>
        </div>


        <div className="z-20 fixed bottom-5 right-5 shadow-lg">
            <button onClick={() => setFormView(formView ? false : true)} className="bg-orange-main text-white font-semibold text-5xl rounded-lg w-20 h-20 flex justify-center items-center md:w-28 md:h-28 transition-all duration-300">
                <p
                className={`${formView ? 'rotate-45' : 'rotate-0'} transition-all duration-300`}
                >
                  +
                </p>
            </button>
        </div>
      </div>
    )
}