function StockCard({ symbol, name, price, change, changePercent }) {
  const isPositive = change >= 0

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-white font-bold text-lg">{symbol}</h2>
          <p className="text-gray-400 text-sm">{name}</p>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${isPositive ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>
          {isPositive ? '▲' : '▼'} {Math.abs(changePercent).toFixed(2)}%
        </span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-white text-2xl font-bold">${price.toFixed(2)}</span>
        <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? '+' : ''}{change.toFixed(2)}
        </span>
      </div>
    </div>
  )
}

export default StockCard