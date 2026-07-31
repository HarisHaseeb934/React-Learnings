import { useState } from 'react'
import './App.css'
import { Section, ThemeProvider } from './Theme'

function App() {
  return(
    <ThemeProvider>
      <Section/>
    </ThemeProvider>
  )
}

export default App
