import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import BookProvider from './context/BookProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BookProvider>
     <RouterProvider router={router}
       fallbackElement = {<div>Loading...</div>} ></RouterProvider>
        <ToastContainer />
    </BookProvider>
  </StrictMode>,
)

