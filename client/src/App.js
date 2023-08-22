//Package Imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

// Scene Imports
import HomePage from "./scenes/Public/homePage";
import StatisticsPage from "./scenes/Public/statisticsPage";
import DonationsPage from "./scenes/Public/donationsPage";
// import HostApplication from "./scenes/hostApplicationPage";
import FundraiserPublicPage from "./scenes/Public/fundraiserPublicPage";
import ActiveFundraiserPage from "./scenes/Public/activeFundraiserPage";
// import AdminHostPage from "./scenes/Admin/adminHomePage";
// import AdminFundraiserPage from "./scenes/Admin/adminFundraiserPage";
import LoginPage from "./scenes/Public/loginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route path="/activefundraiser" element={<ActiveFundraiserPage />} />
          <Route path="/fundraiserpage" element={<FundraiserPublicPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
