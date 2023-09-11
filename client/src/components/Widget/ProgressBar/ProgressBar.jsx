import "./ProgressBar.scss";

const ProgressBar = () => {
  return (
    <>
      <div class="flex-row">
        <div class="progress-container-before">
          <h3>$100,000 Donated</h3>
          <ul>
            <li>100 Watches given to children</li>
            <li>50 Physio Sessions Provided</li>
            <li>$100,000 used for research</li>
          </ul>
        </div>
        <div class="progress-container-before">
          <h3>$300,000 Donated</h3>
          <ul>
            <li>100 Watches given to children</li>
            <li>50 Physio Sessions Provided</li>
            <li>$100,000 used for research</li>
          </ul>
        </div>
        <div class="progress-container-before">
          <h3>$500,000 Donated</h3>
          <ul>
            <li>100 Watches given to children</li>
            <li>50 Physio Sessions Provided</li>
            <li>$100,000 used for research</li>
          </ul>
        </div>
      </div>
      <div class="flex-row center-items">
        <h2>2023</h2>
        <div class="progress progress-moved">
          <div class="progress-bar"></div>
        </div>
      </div>
      <div class="flex-row space-items margin">
        <div class="progress-container-after">
          <h3>$200,000 Donated</h3>
          <ul>
            <li>100 Watches given to children</li>
            <li>50 Physio Sessions Provided</li>
            <li>$100,000 used for research</li>
          </ul>
        </div>
        <div class="progress-container-after">
          <h3>$400,000 Donated</h3>
          <ul>
            <li>100 Watches given to children</li>
            <li>50 Physio Sessions Provided</li>
            <li>$100,000 used for research</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
