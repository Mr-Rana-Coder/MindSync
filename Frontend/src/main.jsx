import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage.jsx";
import FeaturePage from "./Pages/Features/FeaturePage.jsx";
import ContactPage from "./Pages/Contact/ContactPage.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Login from "./Components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/features",
        element: <FeaturePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      }
    ]
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    {/* <RouterProvider router={router} /> */}
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
