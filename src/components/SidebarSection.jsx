import { SidebarButton } from "./SidebarButton";
import { House, ScanBarcode,List, Landmark ,UsersRound, BadgePercent, Cog, Headset,LogOut} from "lucide-react";

export function SidebarSection (){
    return(
   

        <aside className="w-64 bg-white p-4 shadow-md">
        <img src="Layer_1.png" className="pl-4" alt="logo" />
          <nav className="mt-6 space-y-4">
            <SidebarButton icon={House} label="Dashboard" active />
            <p className="text-[#696969] text-sm">Navegacao</p>
            <SidebarButton icon={ScanBarcode} label="Produtos"  />
            <SidebarButton icon={List} label="Pedidos"  />
            <SidebarButton icon={Landmark} label="Financeiro"  />
            <SidebarButton icon={UsersRound} label="Clientes"  />
            <SidebarButton icon={BadgePercent} label="Cupons"  />
            <p className="text-[#696969] text-sm">Ferramentas</p>
            <SidebarButton icon={Cog} label="Meu perfil"  />
            <SidebarButton icon={Headset} label="Suporte"  />
           
          </nav>
          <div className="mt-[300px]">
           <SidebarButton icon={LogOut} label="Sair"  />
           </div>
        </aside>
    )
}