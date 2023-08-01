//Package Imports
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

// Scene Imports
// import HomePage from "./scenes/homePage";
// import StatisticsPage from "./scenes/statisticsPage";
// import DonationsPage from "./scenes/donationsPage";
// import HostApplication from "./scenes/hostApplicationPage";
import FundraiserPublicPage from "./scenes/fundraiserPublicPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <FundraiserPublicPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
