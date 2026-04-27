import { useState } from 'react'
import { stocks } from '../mockData'

function Watchlist({ darkMode }) {
  const [watchlist, setWatchlist] = useState(['AAPL', 'TSLA'])

  const toggleWatchlist = (symbol) => {
    if (watchlist.includes(symbol)) {
      setWatchlist(watchlist.filter(s => s !== symbol))
    } else {
      setWatchlist([...watchlist, symbol])
    }
  }

  return (
    <div className={`border rounded-xl p-5 h-full ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>Watchlist</h2>
        <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">
          {watchlist.length} watching
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {stocks.map(stock => {
          const isWatching = watchlist.includes(stock.symbol)
          const isPositive = stock.change >= 0
          return (
            <div
              key={stock.symbol}
              className={`flex items-center justify-between p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <div>
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stock.symbol}</p>
                <p className={`text-xs ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {isPositive ? '▲' : '▼'} ${Math.abs(stock.change).toFixed(2)}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  ${stock.price.toFixed(2)}
                </p>
                <button
                  onClick={() => toggleWatchlist(stock.symbol)}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                    isWatching
                      ? 'bg-green-900 text-green-400 hover:bg-red-900 hover:text-red-400'
                      : 'bg-gray-700 text-gray-400 hover:bg-green-900 hover:text-green-400'
                  }`}
                >
                  {isWatching ? 'Watching' : '+ Watch'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Watchlist