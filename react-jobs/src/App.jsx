import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout'
import Home from './components/home_page'
import Landing from './components/landing_page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          retry: 0,
      },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Landing />} />
                        <Route path="Home" element={<Home />} />
                    </Route>
                </Routes>
            </Router>
            <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
