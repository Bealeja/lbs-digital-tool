//Package Imports
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

// Scene Imports
// import HomePage from "./scenes/homePage";
// import StatisticsPage from "./scenes/statisticsPage";
// import DonationsPage from "./scenes/donationsPage";
// import HostApplication from "./scenes/hostApplicationPage";
// import FundraiserPublicPage from "./scenes/fundraiserPublicPage";
// import ActiveFundraiserPage from "./scenes/activeFundraiserPage";
// import AdminHostPage from "./scenes/Admin/adminHomePage";
import AdminFundraiserPage from "./scenes/Admin/adminFundraiserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <AdminFundraiserPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
