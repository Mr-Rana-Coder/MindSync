import HomePageFooter from "./Components/Footer/HomePageFooter"
import HomePageHeader from "./Components/Header/HomePageHeader"
import { Outlet } from 'react-router-dom';
import LoginHeader from "./Components/Header/LoginHeader"
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {

  return (
    <>
    <LoginHeader/>
    {/* <Outlet/> */}
    {/* <HomePageFooter/> */}
    <Dashboard/>
    </>
  )
}

export default App
