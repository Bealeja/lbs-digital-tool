const MileStone = ({ heading }) => {
  return (
    <>
      <label class="mcui-checkbox">
        <input type="checkbox" />
        <div>
          <svg class="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
            <title>checkmark-circle</title>
            <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
          </svg>
        </div>
        <h6>{heading}</h6>
      </label>
    </>
  );
};

export default MileStone;
