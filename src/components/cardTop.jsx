export function CardTop({produto, value}) {
    return (
      <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
        <img src="IMG.png" alt="top" className="w-16 h-16 mr-4" />
        <div>
          <p className="text-gray-700">{produto}</p>
          <h2 className="text-lg font-semibold">{value}</h2>
        </div>
      </div>
    );
  }
  