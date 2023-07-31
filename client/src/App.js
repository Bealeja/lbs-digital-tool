//Package Imports
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

// Scene Imports
// import HomePage from "./scenes/homePage";
// import StatisticsPage from "./scenes/statisticsPage";
import DonationsPage from "./scenes/donationsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <DonationsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
