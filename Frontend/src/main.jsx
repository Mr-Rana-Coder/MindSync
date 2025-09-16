import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage.jsx";
import FeaturePage from "./Pages/Features/FeaturePage.jsx";
import ContactPage from "./Pages/Contact/ContactPage.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import JournalPage from './Pages/Journal/JournalPage.jsx'
import HistoryPage from './Pages/History/HistoryPage.jsx'
import SettingPage from './Pages/SettingPage/SettingPage.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './Store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx'

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
      }, 
      {
        element: <PrivateRoute />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/journal", element: <JournalPage /> },
          { path: "/history", element: <HistoryPage /> },
          { path: "/settings", element: <SettingPage /> },
        ],
      },
    ]
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/signin",
    element: <SignIn />
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      </PersistGate>
      </Provider>
  </StrictMode>,
)
