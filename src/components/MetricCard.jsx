
export function MetricCard({title, value, change, bgColor, icon }) {
    return (
      <div className={`${bgColor || "bg-[#eff6fc]"} p-6 text-center shadow rounded-lg w-[200px] h-[147px] top-[140px] left-[511px] `}>
        <p className="text-xl font-bold">{value}</p>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-sm text-green-500">{change}</p>
      </div>
    );
  }