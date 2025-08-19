import HomePageFooter from "./Components/Footer/HomePageFooter"
import HomePageHeader from "./Components/Header/HomePageHeader"
import { Outlet } from 'react-router-dom';
import LoginHeader from "./Components/Header/LoginHeader"
import HistoryPage from "./Pages/History/HistoryPage";
import SettingPage from "./Pages/SettingPage/SettingPage";



function App() {

  return (
    <>
    <HomePageHeader/>
    <Outlet/>
    <HomePageFooter/>
    </>
  )
}

export default App
