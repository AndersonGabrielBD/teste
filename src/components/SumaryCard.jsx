export function SummaryCard({ value, label, color, Icon, bgColor }) {
    return (
      <div className={`p-4 rounded-lg shadow ${color} flex items-center space-x-4`}>
        {Icon && <Icon className="size-6 text-gray-600" />}
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
    );
  }
  