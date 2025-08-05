import HomePageFooter from "./Components/Footer/HomePageFooter"
import HomePageHeader from "./Components/Header/HomePageHeader"
import { Outlet } from 'react-router-dom';
import LoginHeader from "./Components/Header/LoginHeader"
import Dashboard from "./Pages/Dashboard/Dashboard";
import JournalPage from "./Pages/Journal/JournalPage";
import HistoryPage from "./Pages/History/HistoryPage";


function App() {

  return (
    <>
    <LoginHeader/>
    {/* <Outlet/> */}
    {/* <HomePageFooter/> */}
    <HistoryPage/>
    </>
  )
}

export default App
