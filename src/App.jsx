import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './core/routers/AppRouter'

const App = () => {
  return (
    <>
    <RouterProvider router={AppRouter} />
    </>
  )
}

export default App