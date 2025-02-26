export function Table(){
    const orders = [
        {
          id: "#0258916FS",
          client: "Sandro Gabryel",
          avatar:'Avatar.png',
          type: "Entrega",
          status: "Em processamento",
          statusColor: "bg-[#fbffd4]  px-2 py-1 rounded-md w-[159px] h-[33px]",
          total: "R$1.257,98",
          date: "15/12/24",
        },
        {
          id: "#0258916FS",
          client: "Sandro Gabryel",
          avatar:'Avatar.png',
          type: "Entrega",
          status: "Entregue",
          statusColor: "bg-[#d2f9e6] rounded-md w-[92px] h-[33px]",
          total: "R$1.257,98",
          date: "15/12/24",
        },
      ];
    return(
    <div>
    <div className="flex gap-4 mt-4">
    <button className="px-4 py-2 bg-gray-200 rounded-[64px] border border-[#767676] border-dashed ">Tipo</button>
    <button  className="px-4 py-2 bg-gray-200 rounded-[64px] border border-[#767676] border-dashed ">Status</button>
    <button className="px-4 py-2 bg-gray-200 rounded-[64px] border border-[#767676] border-dashed ">Data de pedido</button>
    <button className="px-4 py-2 bg-black text-white rounded-[64px] border border-[#767676] ">Ver todos os pedidos</button>
  </div>

  {/* Tabela de pedidos */}
  <table className="w-full mt-4 border-collapse">
    <thead>
      <tr className="bg-gray-100">
        <th className="text-left p-2 text-sm text-[#767676]">Ordem</th>
        <th className="text-left p-2 text-sm text-[#767676] ">Cliente</th>
        <th className="text-left p-2 text-sm text-[#767676]">Tipo</th>
        <th className="text-left p-2 text-sm text-[#767676]">Status</th>
        <th className="text-left p-2 text-sm text-[#767676]">Produtos</th>
        <th className="text-left p-2 text-sm text-[#767676]">Valor Total</th>
        <th className="text-left p-2 text-sm text-[#767676]">Data</th>
      </tr>
    </thead>
    <tbody>
        
          
      {orders.map((order, index) => (

            
        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-200"}>
        
          <td className="p-2 mr-10">  <input type="checkbox"  id="" className="mr-2 " />{order.id}</td>
          <td className="p-2 flex items-center gap-2">
            <img src={order.avatar} alt="Avatar" className="w-6 h-6 rounded-full" />
            {order.client}
          </td>
          <td className="p-2">{order.type}</td>
          <td className={`p-2 rounded-md ${order.statusColor}`}>{order.status}</td>
          <td className="p-2">
            <button className="px-3 py-1 bg-black text-white rounded-[64px]">Ver detalhes</button>
          </td>
          <td className="p-2">{order.total}</td>
          <td className="p-2">{order.date}</td>
        </tr>
 
      ))}
     
    </tbody>
  </table>
  </div>

    )
}