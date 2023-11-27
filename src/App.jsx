import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './core/routers/AppRouter'
import RootProvider from './core/providers/RootProvider'

//Swiper
import { register as registerSwiper } from 'swiper/element/bundle';
registerSwiper();

const App = () => {
  return (
    <>
    <RootProvider>
      <RouterProvider router={AppRouter} />
    </RootProvider>
    </>
  )
}

export default App