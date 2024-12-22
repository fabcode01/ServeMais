"use client"

import { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
interface OrderContextProps {
    socket?: Socket
}


export const OrderContext = createContext<OrderContextProps>({})


export function OrderProvider(props: any){

    const[socket, setSocket] = useState<Socket>()

    useEffect(()=>{
        const socketO = io('http://192.168.1.107:8080')
        setSocket(socketO)
      },[])
  
    

    return <OrderContext.Provider value={{
        socket: socket!

    }}>

        {props.children}
    </OrderContext.Provider>
}