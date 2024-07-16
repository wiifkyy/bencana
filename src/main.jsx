import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DarkModeContextProvider from './context/DarkMode';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import About from './About';
import Bantuan from './Bantuan';
import DisasterDetail from './DetailBencana';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/bantuan",
    element: <Bantuan />
  },
  {
    path: "/detail",
    element: <DisasterDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
)