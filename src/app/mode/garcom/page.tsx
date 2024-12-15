import Navbar from "@/components/waiter/Navbar";
import SideMenu from "@/components/waiter/SideMenu";
import { Metadata } from "next";





export default function Waiter(){

  const metadata: Metadata = {
    title: 'Garçom',
    description: 'Serve+. Área do garçom.'
  }
  
    return (
      <div className="p-5">
        <Navbar/>
        
      </div>
    )
}