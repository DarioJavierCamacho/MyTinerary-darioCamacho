
import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Cities from './pages/Cities'
import Page404 from './pages/Page404'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cities', element: <Cities /> },
  { path: '*' , element: <Page404/>}
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>

  )
}

export default App
