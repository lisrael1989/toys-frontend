import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import '../src/assets/style/main.css'
import './styles/main.scss'


import { ToyIndex } from './pages/ToyIndex.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { UserDetails } from './pages/UserDetails.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { store } from './store/store.js'


// import { ReviewExplore } from './pages/ReviewExplore'
// import { ReviewIndex } from './pages/ReviewIndex.jsx'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader />
          <main className='main-layout'>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<AboutUs />} path="/about" />
              <Route element={<ToyIndex />} path="/toy" />

              <Route element={<ToyEdit />} path="/toy/edit/:toyId?" />
              <Route element={<ToyDetails />} path="/toy/:toyId" />
              {/* <Route element={<ReviewExplore />} path="/review" /> */}
              <Route element={<UserDetails />} path="/user" />

            </Routes>


          </main>

        </section>
      </Router>
    </Provider>

  )
}


