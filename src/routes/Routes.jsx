import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/homePage/HomePage";
import DetailsPage from "../Pages/detailsPage/DetailsPage";
import FilterPage from "../Pages/filterPage/FilterPage";
import ErrorMessage from "./ErrorMassage";

export const router = createBrowserRouter(
  [
    {
     path: "/",
     Component: MainLayout,
     children: [
      {index: true, Component: HomePage},
      {path:"detailsPage" ,Component: DetailsPage},
      {path:"filterPage", Component: FilterPage},

     ],
      errorElement: <ErrorMessage />,
    },
   
   
  ]);