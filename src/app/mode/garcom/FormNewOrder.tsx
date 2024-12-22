"use client"

import Erro from "@/components/Erro"
import { OrderContext } from "@/context/OrderContext"
import { motion } from "motion/react"
import { useContext, useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"


interface FormProps{
    viewForm: boolean
    setViewForm: () => void
}

export default function FormNewOrder(props: FormProps){

    const[prato, setPrato] = useState('')
    const[descAdd, setDescAdd] = useState('')
    const[qntd, setQntd] = useState('')
    const[pedidos, setPedidos] = useState<any[]>([])

    const {socket} = useContext(OrderContext)

    function handleSubmit(e:any){
       
        e.preventDefault()

        const pedido = {
            id: socket?.id,
            qntd,
            descAdd,
            prato,
            statusPedido: 'prepare'
        }


        socket?.emit('novo_pedido', pedido)

        setPrato('')
        setDescAdd('')
        setQntd('')
        props.setViewForm()


    }

    function cancel(){
        setPrato('')
        setDescAdd('')
        setQntd('')

        props.setViewForm()
    }


    useEffect(()=>{
        socket?.on('novo_pedido', data => {
            setPedidos((current) => [...current, data])
        })
      
        return () => {
            socket?.off('novo_pedido')
        }
    },[socket])

    return (
            <div className={`${props.viewForm ? 'flex' : 'hidden'}`}>
                <div onClick={()=>props.setViewForm()} className="z-10 absolute top-0 w-full h-screen bg-black opacity-45">

                </div>
                <motion.div
                className="absolute z-20 flex justify-center w-full"
                >
                   <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 bg-gray-200 rounded-xl w-[90%] max-w-[530px] py-10 px-2 shadow-lg">
                    <h1 className="text-orange-main font-semibold py-5 px-10 rounded-xl">Novo Pedido</h1>
                     <input required value={prato} onChange={(e)=>setPrato(e.target.value)} type="text" placeholder="Prato*" className="input input-bordered w-full max-w-xs bg-white" />
                     <input value={descAdd} onChange={(e)=>setDescAdd((e.target.value))} type="text" placeholder="Descrição Adicional" className="input input-bordered w-full max-w-xs bg-white" />
                     <input required value={qntd} onChange={(e)=>setQntd((e.target.value))} type="number" placeholder="Quantidade*" className="input input-bordered w-full max-w-xs bg-white" />
                     <div className="flex justify-center gap-2 ">
                         <span onClick={cancel} className="btn bg-red-600 text-white">Cancelar</span>
                         <button type="submit" className="btn bg-green-800 text-white">Novo pedido</button>
                
                     </div>
                   </form>
                </motion.div>
            </div>
           
      
    )
}