import { React, useState, useEffect } from "react";
import "./index.scss";

const Table = () => {
  //fetch data in accordance to heading
  const [tableData, setTableData] = useState([]);

  const getTableData = async () => {
    await fetch(`http://localhost:3001/tables`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setTableData(json))
      .catch((error) => {
        console.log(`failure to get JSON data for Table : ${error}`);
      });
    console.log(tableData);
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <div id="bar-chart">
      <div class="graph">
        <ul class="x-axis">
          <li>
            <span>2023</span>
          </li>
          <li>
            <span>2024</span>
          </li>
          <li>
            <span>2025</span>
          </li>
        </ul>
        <ul class="y-axis">
          <li>
            <span>80</span>
          </li>
          <li>
            <span>60</span>
          </li>
          <li>
            <span>40</span>
          </li>
          <li>
            <span>20</span>
          </li>
          <li>
            <span>0</span>
          </li>
        </ul>
        <div class="bars">
          <div class="bar-group">
            <div class="bar bar-1 stat-1" style={{ height: "7.5%" }}>
              <span>fitbit watches provided</span>
            </div>
            <div class="bar bar-2 stat-2" style={{ height: "15%" }}>
              <span>physio sessions paid</span>
            </div>
            <div class="bar bar-3 stat-3" style={{ height: "25%" }}>
              <span>thousand for research</span>
            </div>
          </div>
          <div class="bar-group">
            <div class="bar bar-4 stat-1" style={{ height: "25%" }}>
              <span>fitbit watches provided</span>
            </div>
            <div class="bar bar-5 stat-2" style={{ height: "37.5%" }}>
              <span>physio sessions paid</span>
            </div>
            <div class="bar bar-6 stat-3" style={{ height: "50%" }}>
              <span>thousand for research</span>
            </div>
          </div>
          <div class="bar-group">
            <div class="bar bar-7 stat-1" style={{ height: "50%" }}>
              <span>fitbit watches provided</span>
            </div>
            <div class="bar bar-8 stat-2" style={{ height: "62.5%" }}>
              <span>physio sessions paid</span>
            </div>
            <div class="bar bar-9 stat-3" style={{ height: "75%" }}>
              <span>thousand for research</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
