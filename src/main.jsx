import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Posts from './routes/Posts'
import NewPost from './Components/NewPost.jsx';
import './index.css'
import RootLayout from './routes/RootLayout.jsx';

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />, 
    children: [
    { path: '/', element: <Posts/> }, //App should be done here if the path is nothing//
    { path: '/Create-post', element: <NewPost /> },
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
