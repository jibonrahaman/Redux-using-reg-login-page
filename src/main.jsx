import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './leyaouts/Signup.jsx';
import Login from './leyaouts/Login.jsx';
import { Provider } from 'react-redux';
import { store } from './slices/store.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider  router={router}/>
  </Provider>
  </React.StrictMode>,
)
