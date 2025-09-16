import HomePageFooter from "./Components/Footer/HomePageFooter"
import HomePageHeader from "./Components/Header/HomePageHeader"
import { Outlet } from 'react-router-dom';
import LoginHeader from "./Components/Header/LoginHeader"
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {
        isLoggedIn ? (
          <>
            <LoginHeader />
            <Outlet />
          </>
        ) : (
          <>
            <HomePageHeader />
            <Outlet />
            <HomePageFooter />
          </>
        )
      }
    </>
  )
}

export default App;
