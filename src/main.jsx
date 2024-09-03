import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './css/GlobalStyle.jsx'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Produtos from './routes/Produtos.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    errorElement: <Error/>,

    children:[
      {path: '/', element: <Home/>},
      {path: '/login', element: <Login/>},
      {path: '/produtos', element: <Produtos/>}

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle/>
  </StrictMode>,
)
