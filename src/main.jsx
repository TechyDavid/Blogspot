import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import NewPost from './Components/NewPost.jsx';
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <App/> }, //App should be done here if the path is nothing//
  { path: '/Create-post', element: <NewPost /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
