import { Cards } from "@/components/finance";
import { Header } from "@/components/header";
import { Heading } from "@/components/heading";
import { Transactions } from "@/components/transactions";

export default function Home() {
  return (
    <main className="lg:h-screen flex flex-col bg-section">
      <Header />
      <section className="lg:flex-1 p-4 lg:p-8 lg:container lg:mx-auto lg:h-[calc(100vh - 65px)] overflow-hidden">
        <Heading />
        <Cards />
        <Transactions />
      </section>
    </main>
  );
}
