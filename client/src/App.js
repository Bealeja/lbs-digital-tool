//Package Imports
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

// Scene Imports
import HomePage from "./scenes/Public/homePage";
import StatisticsPage from "./scenes/Public/statisticsPage";
import DonationsPage from "./scenes/Public/donationsPage";
// import HostApplication from "./scenes/hostApplicationPage";
// import FundraiserPublicPage from "./scenes/fundraiserPublicPage";
// import ActiveFundraiserPage from "./scenes/activeFundraiserPage";
// import AdminHostPage from "./scenes/Admin/adminHomePage";
import AdminFundraiserPage from "./scenes/Admin/adminFundraiserPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/statistics" component={StatisticsPage} />
        <Route path="/donations" component={DonationsPage} />
      </Router>
    </div>
  );
}

export default App;
