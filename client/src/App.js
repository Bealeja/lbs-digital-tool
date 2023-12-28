//Package Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { React, useState, useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";

import MessagePage from "./scenes/Public/messagePage/messagePage";
import EventsPage from "./scenes/Public/eventsPage/eventsPage";
import StatisticsPage from "./scenes/Public/statisticsPage/statisticsPage";
import ActiveFundraiserPage from "./scenes/Public/activeFundraiserPage/activeFundraiserPage";
import LoginPage from "./scenes/Public/loginPage/loginPage";
import Layout from "./scenes/Public/Layout/Layout";
import PrivateRoute from "./PrivateRoute";

import io from "socket.io-client";

const userName = "Jack";
const socket = io.connect("http://localhost:3002");

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/user/userprofile?username=Jack`
        );
        if (!response.ok)
          console.error(
            "There was an issue with the response from user profile"
          );
        const responseJSON = await response.json();
        setUser(responseJSON);
      } catch (error) {
        console.error(
          `Error in getRequest for route with params: ${error.message}`
        );
      }
    };

    getProfile();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={<PrivateRoute component={Layout} />}
            />
            <Route path="Events" element={<EventsPage user={user} />} />
            <Route
              path="Messages"
              element={<MessagePage userName={userName} socket={socket} />}
            />
            <Route path="About Us" element={<StatisticsPage />} />
            <Route path="Fundraiser" element={<ActiveFundraiserPage />} />
            <Route path="Login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
