import Providers from "@/Components/Hero/Providers";
import { Footer } from "@/Components/shared/Footer/Footer";
import { Header } from "@/Components/shared/Header/Header";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tripix",
  description: "Tripix itinerary planner ia a tool to plan your trips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`bg-gray-900 ${nunito.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
