const API_KEY = import.meta.env.VITE_FINNHUB_KEY

export const fetchQuote = async (symbol) => {
  try {
    const res = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
    )
    const data = await res.json()
    if (!data.c) return null
    return {
      price: data.c,
      change: data.d,
      changePercent: data.dp,
    }
  } catch (error) {
    console.error('Error fetching quote:', error)
    return null
  }
}

export const fetchCandles = async (symbol) => {
  try {
    const to = Math.floor(Date.now() / 1000)
    const from = to - 30 * 24 * 60 * 60
    const res = await fetch(
      `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&from=${from}&to=${to}&token=${API_KEY}`
    )
    const data = await res.json()
    if (data.s !== 'ok') return []
    return data.t.map((time, i) => ({
      date: new Date(time * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      price: parseFloat(data.c[i].toFixed(2))
    }))
  } catch (error) {
    console.error('Error fetching candles:', error)
    return []
  }
}