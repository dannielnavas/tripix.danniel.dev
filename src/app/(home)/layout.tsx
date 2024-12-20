import { Hero } from "@/Components/Hero/Hero";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Hero />

      {children}
    </>
  );
}
