//Package Imports
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

// Scene Imports
import HomePage from "./scenes/homePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
