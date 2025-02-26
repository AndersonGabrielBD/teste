import { Search, Bell, Mic, Scan} from "lucide-react";
import PerformanceChart from "./components/PerformanceChart";
import { MetricCard } from "./components/MetricCard";
import { MetricSection } from "./components/MetricSection";
import { SumaryCardSection } from "./components/SumaryCardSection";
import { SidebarSection } from "./components/SidebarSection";
import { Table } from "./components/Table";

const vendasSemana = [
  { day: "Seg", vendas: 120 },
  { day: "Ter", vendas: 200 },
  { day: "Qua", vendas: 150 },
  { day: "Qui", vendas: 206 },
  { day: "Sex", vendas: 180 },
  { day: "Sáb", vendas: 90 },
  { day: "Dom", vendas: 75 },
];




export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">

      <SidebarSection/>

      <main className="flex-1 p-6">
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Olá, Gabryel!</h2>
            <p className="text-gray-600">Acompanhe as métricas da loja</p>
          </div>
         

<div className="relative w-[700px] ml-[650px]">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-" /> 
  <input 
    className="pl-10 pr-16 p-2 rounded-md border border-gray-300 bg-black text-white w-full"
    placeholder="Search"
  />
  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
    <Mic className="text-white w-5 h-5 cursor-pointer" />
    <Scan className="text-white w-5 h-5 cursor-pointer" />
  </div>
</div>

<Bell className="text-black cursor-pointer" />
         
  </header>

        
  < MetricSection />
 

  <section className="mt-[-200px] bg-white p-4 rounded-lg shadow flex justify-between items-center w-[450px] h-[180px]">
  <div className="flex flex-col w-1/2 mr-20">
    <h3 className="text-[30px] font-semibold text-gray-700">Performance de vendas</h3>
    <h2 className="text-[25px] font-semibold text-gray-700">+30%</h2>
    <p className="text-xs text-[#767676]">
      Suas vendas performaram exatos 30% acima do mês anterior, parabéns.
    </p>
  </div>

  <div className="w-[220px] h-[200px]  ">
  <PerformanceChart  data={vendasSemana} />
  </div>
  <div className="ml-[200px] mb-2 mt-[100px] flex flex-col gap-4 ">
  <MetricCard title="Total em Vendas" value="R$158.580,25" change="+16,1% últimos 30 dias"  />
  <MetricCard title="Cupons de desconto ultilizados" value= '1857'  />

  </div>
  </section>
  <section className="mt-6 bg-white p-6 rounded-lg shadow">
  <h2 className="text-xl font-semibold text-gray-700">Pedidos</h2>
  <p className="text-gray-500">Listagem de pedidos realizados e seu status nos últimos 7 dias</p>

  <SumaryCardSection/>

</section>

<Table/>


      </main>
    </div>
  );
}

