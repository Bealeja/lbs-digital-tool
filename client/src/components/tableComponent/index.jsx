import "./index.scss";

const Table = () => {
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
          <li>
            <span>2026</span>
          </li>
        </ul>
        <ul class="y-axis">
          <li>
            <span>20</span>
          </li>
          <li>
            <span>15</span>
          </li>
          <li>
            <span>10</span>
          </li>
          <li>
            <span>5</span>
          </li>
          <li>
            <span>0</span>
          </li>
        </ul>
        <div class="bars">
          <div class="bar-group">
            <div class="bar bar-1 stat-1" style={{ height: "30%" }}>
              <span>fitbit watches provided</span>
            </div>
            <div class="bar bar-2 stat-2" style={{ height: "51%" }}>
              <span>physio sessions paid</span>
            </div>
            <div class="bar bar-3 stat-3" style={{ height: "80%" }}>
              <span>thousand for research</span>
            </div>
          </div>
          <div class="bar-group">
            <div class="bar bar-4 stat-1" style={{ height: "51%" }}>
              <span>6080</span>
            </div>
            <div class="bar bar-5 stat-2" style={{ height: "51%" }}>
              <span>6880</span>
            </div>
            <div class="bar bar-6 stat-3" style={{ height: "51%" }}>
              <span>1760</span>
            </div>
          </div>
          <div class="bar-group">
            <div class="bar bar-7 stat-1" style={{ height: "51%" }}>
              <span>6240</span>
            </div>
            <div class="bar bar-8 stat-2" style={{ height: "51%" }}>
              <span>5760</span>
            </div>
            <div class="bar bar-9 stat-3" style={{ height: "51%" }}>
              <span>2880</span>
            </div>
          </div>
          <div class="bar-group">
            <div class="bar bar-10 stat-1" style={{ height: "51%" }}>
              <span>3520</span>
            </div>
            <div class="bar bar-11 stat-2" style={{ height: "51%" }}>
              <span>5120</span>
            </div>
            <div class="bar bar-12 stat-3" style={{ height: "51%" }}>
              <span>4720</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
