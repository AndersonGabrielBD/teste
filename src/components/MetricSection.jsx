import { MetricCard } from "./MetricCard"
import { CardTop } from "./cardTop"
export function MetricSection(){
    return(
           <section className=" flex gap-[100px] mt-6">
              <MetricCard title="Total em Vendas" value="R$307.580,15" change="+30,3% últimos 30 dias" />
              <MetricCard title="Total em Comissões" value="R$30.580,15" change="+58,2% últimos 30 dias"  bgColor="bg-[#d2f9e6]" />
              <MetricCard title="Vendas do Dia" value="R$26.580,25" change="+34,8% últimos 30 dias" />
              <div className="flex-col ml-[250px]">
              <h1 className="font-bold">Top produtos</h1>
              <p className="text-gray-600">Mais vendidos nos últimos 30 dias</p>
              <CardTop  produto ={"Fio Cabo Flexível 2,5mm SIL | 100M"} value={'R$98.658,74 (em vendas)'}/>
              <CardTop  produto ={"Fio Cabo Flexível 2,5mm SIL | 100M"} value={'R$98.658,74 (em vendas)'}/>
              <CardTop  produto ={"Fio Cabo Flexível 2,5mm SIL | 100M"} value={'R$98.658,74 (em vendas)'} />
              </div>
            </section>
    )
}