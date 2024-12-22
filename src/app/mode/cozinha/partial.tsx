'use client'

import { OrderContext } from "@/context/OrderContext";
import { personIcon, titlePedidosIcon } from "@/utils/Icons";
import { motion } from "motion/react";
import {useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";


interface PartialProps {
    mode?: string
    orderList?: any
}

export default function Partial(props: PartialProps) {
    const[user, setUser] = useState('prepare')
    const[pedidos, setPedidos] = useState<any[]>([])

    const{socket} = useContext(OrderContext)


    useEffect(()=>{
      socket?.emit('atualizar_status', pedidos)
    },[pedidos])


    useEffect(()=>{
  

      socket?.on('atualizar_lista', (data: any) => {
        setPedidos((current) => [...current, data])
      })
  
      return () => {
        socket?.off('atualizar_lista')
      }
    },[socket])
  

    function setStatus(id: any){

       setPedidos(pedidos.map(item => item.id === id ? { ...item, statusPedido: 'ready' } : item))
      
    }



    function setDone(id: any){
      console.log(id);
      
    }
    

  return (
    <div className="w-4/5 h-[800px] border p-5 rounded-lg overflow-clip min-w-[735px]">
        <h2 className=" flex items-center text-4xl font-semibold gap-2">Pedidos <span className="text-orange-main">{titlePedidosIcon}</span></h2>

      <ul className="flex flex-col gap-2 items-center mt-5">
          {pedidos.map((pedido, i) => (
            <motion.div
            key={i}
            initial={{translateX: 80}}
            animate={{translateX: 0}}
            className="flex flex-col justify-around gap-5 w-[50%]  h-auto bg-gray-300 px-5 py-10 rounded-lg min-w-[660px]">
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
                  |
                  <div className="">
                  
                  
                            <motion.div
                            initial={{opacity: 0, scale: 0}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.4,
                                scale: {type: 'spring', visualDuration: 0.4, bounce: 0}
                            }}
                            exit={{translateY: 60}}
                            onClick={()=>{
                              pedido.statusPedido == 'ready' ? setDone(pedido.id) : setStatus(
                              pedido.id)
                            }}
                            className={`${pedido.statusPedido === 'prepare' ? 'bg-green-800' : 'bg-yellow-500'} text-center py-3 w-32 rounded-lg text-white font-bold  cursor-pointer transition-colors duration-700 select-none active:scale-125`}>
                                {pedido.statusPedido === 'prepare' ? 'Preparar' : 'Concluir'}
                  
                            </motion.div>
                  
                  
                  </div>
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
  );
}
