import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import HomePage from './Pages/homePage/HomePage.jsx'
import DetailsPage from './Pages/detailsPage/DetailsPage.jsx'
import FilterPage from './Pages/filterPage/FilterPage.jsx'


const router = createBrowserRouter(
  [
    {
     path: "/",
     Component: MainLayout,
     children: [
      {index: true, Component: HomePage},
      {path:"detailsPage" ,Component: DetailsPage},
      {path:"filterPage", Component: FilterPage},

     ]
    },
   
  ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
