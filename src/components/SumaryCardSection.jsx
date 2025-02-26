import { Box, Hand, TruckIcon, CircleSlash } from "lucide-react";
import { SummaryCard } from "./SumaryCard";


export function SumaryCardSection(){
return(
  <div className="grid grid-cols-4 gap-4 mt-4">
    <SummaryCard value="698" label="Pedidos Realizados" color="bg-[#d2f9e6]" Icon={Box}   />
    <SummaryCard value="169" label="Pedidos enviados" color="bg-gray-100" Icon={TruckIcon}/>
    <SummaryCard value="8" label="Pedidos retornados" color="bg-gray-200" Icon={Hand} />
    <SummaryCard value="25" label="Pedidos cancelados" color="bg-red-100" Icon={CircleSlash} />
  </div>
)
 }