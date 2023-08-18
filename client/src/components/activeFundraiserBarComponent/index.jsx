import { React, useState, useEffect } from "react";

import ActiveFundraiserComponent from "../activeFundraiserComponent";

const ActiveFundraiserBar = () => {
  const [activeFundraisers, setActiveFundraisers] = useState([]);

  const getFundraisers = async () => {
    await fetch(`http://localhost:3001/fundraisers`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setActiveFundraisers(json))
      .catch((error) => {
        console.log(
          `failure to get JSON data for Active Fundraiser Bar Component : ${error}`
        );
      });
  };

  //Render only on component render
  useEffect(() => {
    getFundraisers();
  }, []);

  return (
    <div class="flex-row">
      {activeFundraisers
        .slice(0, 4)
        .map(({ _id, heading, content, picturePath }) => (
          <ActiveFundraiserComponent
            key={_id}
            heading={heading}
            content={content}
            picturePath={picturePath}
          />
        ))}
    </div>
  );
};

export default ActiveFundraiserBar;
