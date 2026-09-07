import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1Fi Marketplace",
  description: "1Fi SDE Intern Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-gray-100 min-h-screen flex justify-center text-gray-900")}>
        <div className="w-full max-w-[450px] bg-white min-h-screen shadow-2xl relative overflow-x-hidden flex flex-col mx-auto sm:border-x sm:border-gray-200">
          {children}
        </div>
      </body>
    </html>
  );
}
