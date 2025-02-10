import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
 width: 'device-width',
 initialScale: 1
};

export const metadata: Metadata = {
 title: 'BuildTech Pro | Leading Construction Excellence',
 description: 'Premier construction company delivering commercial and residential projects with over 25 years of excellence',
 keywords: [
   'construction company',
   'commercial construction',
   'residential development',
   'building contractors',
   'construction services'
 ],
 openGraph: {
   type: 'website',
   title: 'BuildTech Pro - Building Tomorrow\'s Infrastructure Today',
   description: 'Excellence in construction with over two decades of experience',
   siteName: 'BuildTech Pro'
 },
 robots: {
   index: true,
   follow: true
 }
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
   <html lang="en">
     <body className={`${inter.className} antialiased`}>
       <Navbar />
       <main className="min-h-screen pt-16">
         {children}
       </main>
       <Footer />
     </body>
   </html>
 );
}