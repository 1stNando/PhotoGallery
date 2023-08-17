import React from 'react'
import { Link, Routes } from 'react-router-dom'

export function App() {
  return (
    <div>
      <header>
        <h1>Hello world!</h1>
        <h2>Photo Gallery for the world to see!</h2>
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

      <footer>
        <p>Made by Fernando J.V.A in 2023</p>
      </footer>
    </div>
  )
}
