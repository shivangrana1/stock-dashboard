# Stock Dashboard

A real-time stock market dashboard built with React, Tailwind CSS, and Finnhub API.

## Live Demo
[View Live](https://your-vercel-url.vercel.app)

## Features
- Real-time stock prices from Finnhub API
- Interactive price history charts
- Search stocks by name or symbol
- Click any stock for detailed view
- Add/remove stocks from watchlist
- Loading skeletons while data fetches
- Error handling for failed API calls
- Dark and light mode toggle
- Fully responsive design

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- Recharts
- React Router v6
- Finnhub API

## Getting Started

1. Clone the repository
   git clone https://github.com/YOUR_USERNAME/stock-dashboard.git

2. Install dependencies
   npm install

3. Create a .env file in the root folder
   VITE_FINNHUB_KEY=your_api_key_here

4. Get a free API key from https://finnhub.io

5. Start the development server
   npm run dev

## Project Structure
src/
├── components/
│   ├── Chart.jsx
│   ├── Navbar.jsx
│   ├── SkeletonCard.jsx
│   ├── StockCard.jsx
│   └── Watchlist.jsx
├── pages/
│   ├── Dashboard.jsx
│   └── StockDetail.jsx
├── api.js
├── mockData.js
└── App.jsx

## Screenshots
Coming soon

## Author
Shivang Rana