import { Hero } from "@/component/home/hero";
import { Services } from "@/component/home/services";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
    </main>
  );
}
