function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`border-b px-8 py-4 flex items-center justify-between sticky top-0 z-10 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="flex items-center gap-2">
        <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Stock</span>
        <span className="text-2xl font-bold text-green-500">Dashboard</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Live Market</span>
        </div>
        <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>S&P 500</span>
          <span className="text-green-400 text-sm font-semibold ml-2">▲ 0.42%</span>
        </div>
        <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>NASDAQ</span>
          <span className="text-red-400 text-sm font-semibold ml-2">▼ 0.18%</span>
        </div>
        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          {darkMode ? '☀ Light' : '☾ Dark'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar