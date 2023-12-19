//Package Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { React, useState, useEffect } from "react";
// import { getRequest } from "./utility/fetch.js";

// Scene Imports
import HomePage from "./scenes/Public/homePage/homePage";
import MessagePage from "./scenes/Public/messagePage/messagePage";
import EventsPage from "./scenes/Public/eventsPage/eventsPage";
import StatisticsPage from "./scenes/Public/statisticsPage/statisticsPage";
import DonationsPage from "./scenes/Public/donationsPage/donationsPage";
// import HostApplication from "./scenes/hostApplicationPage";
import FundraiserPublicPage from "./scenes/Public/fundraiserPublicPage/fundraiserPublicPage";
import ActiveFundraiserPage from "./scenes/Public/activeFundraiserPage/activeFundraiserPage";
// import AdminHostPage from "./scenes/Admin/adminHomePage";
// import AdminFundraiserPage from "./scenes/Admin/adminFundraiserPage";
import LoginPage from "./scenes/Public/loginPage/loginPage";
import Layout from "./scenes/Public/Layout/Layout";

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Events" element={<EventsPage user={user} />} />
            <Route
              path="Messages"
              element={<MessagePage userName={userName} socket={socket} />}
            />
            <Route path="About Us" element={<StatisticsPage />} />
            <Route path="Fundraiser" element={<ActiveFundraiserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
