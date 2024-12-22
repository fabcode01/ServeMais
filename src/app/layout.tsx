import type { Metadata } from "next";
import "./globals.css";
import { OrderProvider } from "@/context/OrderContext";



export const metadata: Metadata = {
  title: "Serve+",
  description: "Gerencie pedidos com facilidade.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <OrderProvider>
        <body
          className={``}
        >
          {children}
        </body>
      </OrderProvider>
    </html>
  );
}
