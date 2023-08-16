import "./index.scss";

const HorizontalTable = () => {
  return (
    <div id="hbar-chart">
      <div class="graph">
        <ul class="x-axis">
          <li>
            <span>20</span>
          </li>
          <li>
            <span>40</span>
          </li>
          <li>
            <span>60</span>
          </li>
          <li>
            <span>80</span>
          </li>
          <li>
            <span>100</span>
          </li>
        </ul>
        {/* <ul class="y-axis">
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
        </ul> */}
        <div class="bars">
          <div class="bar-group">
            <div class="bar bar-1 stat-1" style={{ width: "40%" }}>
              <span> $40,000 raised for St Vincent Hospital</span>
            </div>
            <div class="bar bar-2 stat-2" style={{ width: "30%" }}>
              <span>30 physio sessions paid</span>
            </div>
            <div class="bar bar-3 stat-3" style={{ width: "80%" }}>
              <span>$80,000 raised for cancer research</span>
            </div>
            <div class="bar bar-4 stat-1" style={{ width: "90%" }}>
              <span>90 Physiotherapists volunteering</span>
            </div>
            <div class="bar bar-5 stat-2" style={{ width: "87%" }}>
              <span>87 Fundraisers created</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTable;
