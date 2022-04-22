import React from 'react'
import './App.css'
import ProgressContextProvider from './components/contexts/ProgressContext'
import ThemeContextProvider from './components/contexts/ThemeContext'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <Navbar />
        </ProgressContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
