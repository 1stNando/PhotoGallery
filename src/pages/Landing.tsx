import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import data from './data2.json'

// This will cover basic part of landing page for the gallery.
// Loads at first, when we launch the App.

export function Landing() {
  return (
    <>
      <div>
        <main>
          <nav>
            <ul>
              <li>
                <p>Home</p>
              </li>
            </ul>
          </nav>
          <section className="Landing">
            <div className="container">
              <h2>Pictures here!</h2>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
