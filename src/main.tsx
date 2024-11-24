import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import Auckland from './pages/Auckland.tsx'
import Wellington from './pages/Wellington.tsx'
import Queenstown from './pages/Queenstown.tsx'
import AucklandRestaurant from './pages/AucklandRestaurant.tsx'
import AucklandHotels from './pages/AucklandHotels.tsx'
import WellingtonRestaurant from './pages/WellingtonRestaurant.tsx'
import WellingtonHotels from './pages/WellingtonHotels.tsx'
import QueenstownHotels from './pages/QueenstownHotels.tsx'
import QueenstownRestaurant from './pages/QueenstownRestaurant.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.tsx'

const router = createBrowserRouter([
  { path: '/',
    element:<App/>,
    errorElement: <NotFoundPage/>,
   },
   { path: '/auckland',
    element:<Auckland/>,
   },
   { path: '/Wellington',
    element:<Wellington/>,
   },
   { path: '/queenstown',
    element:<Queenstown/>,
   },  
   { path: '/aucklandrestaurant',
    element:<AucklandRestaurant/>,
   },  
   { path: '/aucklandhotels',
    element:<AucklandHotels/>,
   },
   { path: '/wellingtonhotels',
    element:<WellingtonHotels/>,
   },
   { path: '/wellingtonrestaurant',
    element:<WellingtonRestaurant/>,
   }
   ,
   { path: '/queenstowntonhotels',
    element:<QueenstownHotels/>,
   },
   { path: '/queenstownrestaurant',
    element:<QueenstownRestaurant/>,
   }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
