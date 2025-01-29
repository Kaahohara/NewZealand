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
  { path: 'NewZealand/',
    element:<App/>,
    errorElement: <NotFoundPage/>,
   },
   { path: 'NewZealand/auckland',
    element:<Auckland/>,
   },
   { path: 'NewZealand/Wellington',
    element:<Wellington/>,
   },
   { path: 'NewZealand/queenstown',
    element:<Queenstown/>,
   },  
   { path: 'NewZealand/aucklandrestaurant',
    element:<AucklandRestaurant/>,
   },  
   { path: 'NewZealand/aucklandhotels',
    element:<AucklandHotels/>,
   },
   { path: 'NewZealand/wellingtonhotels',
    element:<WellingtonHotels/>,
   },
   { path: 'NewZealand/wellingtonrestaurant',
    element:<WellingtonRestaurant/>,
   }
   ,
   { path: 'NewZealand/queenstowntonhotels',
    element:<QueenstownHotels/>,
   },
   { path: 'NewZealand/queenstownrestaurant',
    element:<QueenstownRestaurant/>,
   }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
