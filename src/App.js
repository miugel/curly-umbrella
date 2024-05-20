import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components'

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Fragment>
  )
}

const HomePage = () => <Fragment></Fragment>
