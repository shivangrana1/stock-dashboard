import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StockCard from '../components/StockCard'
import Chart from '../components/Chart'
import Watchlist from '../components/Watchlist'
import SkeletonCard from '../components/SkeletonCard'
import { stocks } from '../mockData'

function Dashboard({ darkMode }) {
  const [search, setSearch] = useState('')
  const [selectedStock, setSelectedStock] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedStock(stocks[0])
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const filteredStocks = stocks.filter(s =>
    s.symbol.toLowerCase().includes(search.toLowerCase()) ||
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  const totalValue = stocks.reduce((sum, s) => sum + s.price, 0)
  const gainers = stocks.filter(s => s.change > 0).length
  const losers = stocks.filter(s => s.change < 0).length

  return (
    <div className="p-8 flex flex-col gap-8">

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={`border rounded-xl p-4 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
          <p className={`text-xs uppercase tracking-widest mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Tracked</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stocks.length}</p>
          <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Stocks</p>
        </div>
        <div className={`border rounded-xl p-4 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
          <p className={`text-xs uppercase tracking-widest mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Portfolio Value</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>${totalValue.toFixed(0)}</p>
          <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Combined price</p>
        </div>
        <div className={`border rounded-xl p-4 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
          <p className={`text-xs uppercase tracking-widest mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Gainers</p>
          <p className="text-2xl font-bold text-green-400">{gainers}</p>
          <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Up today</p>
        </div>
        <div className={`border rounded-xl p-4 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
          <p className={`text-xs uppercase tracking-widest mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Losers</p>
          <p className="text-2xl font-bold text-red-400">{losers}</p>
          <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Down today</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search stocks by name or symbol..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={`w-full border rounded-xl px-5 py-3 focus:outline-none focus:border-green-500 transition-all ${darkMode ? 'bg-gray-900 border-gray-800 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-4 top-3 text-gray-500 hover:text-white text-lg"
          >
            ✕
          </button>
        )}
      </div>

      {/* Stock Cards */}
      <div>
        <h2 className={`text-sm font-medium mb-4 uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Market Overview
          {search && <span className="ml-2 text-green-400">— {filteredStocks.length} results</span>}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {loading ? (
            Array(5).fill(0).map((_, i) => <SkeletonCard key={i} />)
          ) : filteredStocks.length > 0 ? (
            filteredStocks.map(stock => (
              <div
                key={stock.symbol}
                onClick={() => setSelectedStock(stock)}
                onDoubleClick={() => navigate(`/stock/${stock.symbol}`)}
                className={`cursor-pointer transition-all ${selectedStock?.symbol === stock.symbol ? 'ring-2 ring-green-500 rounded-xl' : ''}`}
              >
                <StockCard
                  symbol={stock.symbol}
                  name={stock.name}
                  price={stock.price}
                  change={stock.change}
                  changePercent={stock.changePercent}
                />
              </div>
            ))
          ) : (
            <div className="col-span-5 text-center py-12 text-gray-500">
              No stocks found for "<span className="text-gray-400">{search}</span>"
            </div>
          )}
        </div>
      </div>

      {/* Chart + Watchlist */}
      {!loading && selectedStock && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Chart selectedStock={selectedStock} darkMode={darkMode} />
          </div>
          <div>
            <Watchlist darkMode={darkMode} />
          </div>
        </div>
      )}

    </div>
  )
}

export default Dashboard