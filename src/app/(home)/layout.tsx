import { Hero } from "@/Components/Hero/Hero";
import Providers from "@/Components/Hero/Providers";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <Hero />
      {children}
    </Providers>
  );
}
