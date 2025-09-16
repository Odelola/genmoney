import '@ant-design/v5-patch-for-react-19';

import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import { Navbar } from '@/layouts';


export const metadata: Metadata = {
  title: "GenMoney | Stocks & ETFs",
  description: "Leading industry for Stock analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
