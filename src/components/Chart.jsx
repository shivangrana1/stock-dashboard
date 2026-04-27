import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { chartData } from '../mockData'

function Chart({ selectedStock }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-white font-bold text-lg">
            {selectedStock.symbol} Price History
          </h2>
          <p className="text-gray-400 text-sm">{selectedStock.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
            selectedStock.change >= 0
              ? 'bg-green-900 text-green-400'
              : 'bg-red-900 text-red-400'
          }`}>
            {selectedStock.change >= 0 ? '▲' : '▼'} {Math.abs(selectedStock.changePercent).toFixed(2)}%
          </span>
          <span className="text-white font-bold text-lg">
            ${selectedStock.price.toFixed(2)}
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
          <XAxis
            dataKey="date"
            stroke="#6b7280"
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis
            stroke="#6b7280"
            tick={{ fill: '#6b7280', fontSize: 12 }}
            domain={['auto', 'auto']}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#111827',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={selectedStock.change >= 0 ? '#4ade80' : '#f87171'}
            strokeWidth={2}
            dot={{ fill: selectedStock.change >= 0 ? '#4ade80' : '#f87171', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart