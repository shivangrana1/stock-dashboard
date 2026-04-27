import { useParams, useNavigate } from 'react-router-dom'
import { stocks, chartData } from '../mockData'
import Chart from '../components/Chart'

function StockDetail({ darkMode }) {
  const { symbol } = useParams()
  const navigate = useNavigate()
  const stock = stocks.find(s => s.symbol === symbol)

  if (!stock) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-400 text-lg">Stock not found.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
        >
          Back to Dashboard
        </button>
      </div>
    )
  }

  const isPositive = stock.change >= 0

  return (
    <div className="p-8 flex flex-col gap-6">

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className={`flex items-center gap-2 text-sm w-fit px-4 py-2 rounded-lg transition-all ${darkMode ? 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800' : 'bg-white text-gray-500 hover:text-gray-900 border border-gray-200'}`}
      >
        ← Back to Dashboard
      </button>

      {/* Stock Header */}
      <div className={`border rounded-xl p-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stock.symbol}</h1>
            <p className={`text-lg mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stock.name}</p>
          </div>
          <div className="text-right">
            <p className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>${stock.price.toFixed(2)}</p>
            <p className={`text-lg font-semibold mt-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? '▲' : '▼'} {Math.abs(stock.change).toFixed(2)} ({Math.abs(stock.changePercent).toFixed(2)}%)
            </p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Open', value: `$${(stock.price - stock.change).toFixed(2)}` },
          { label: 'Prev Close', value: `$${(stock.price - stock.change).toFixed(2)}` },
          { label: 'Day High', value: `$${(stock.price + Math.abs(stock.change) * 0.5).toFixed(2)}` },
          { label: 'Day Low', value: `$${(stock.price - Math.abs(stock.change) * 0.5).toFixed(2)}` },
        ].map(stat => (
          <div key={stat.label} className={`border rounded-xl p-4 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
            <p className={`text-xs uppercase tracking-widest mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</p>
            <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <Chart selectedStock={stock} darkMode={darkMode} />

    </div>
  )
}

export default StockDetail