import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function PerformanceChart({ data }) {
  return (
    <div className="bg-transparent mt-3 shadow rounded-lg flex w-[400px] ml-[-20px]">
      <ResponsiveContainer width={350} height={220}>
        <BarChart data={data} barSize={40} barCategoryGap="30%">
          <XAxis dataKey="day" stroke="#2e2e30" />
          <Tooltip />
          <Bar dataKey="vendas" fill="#171e34" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
