import MileStone from "../MileStone/MileStone";

const MilestoneListComponent = () => {
  const labels = ["10 Volunteers", "20 Tickets Bought", "Gary Has A Dance"];
  return (
    <>
      <h2>Milestones</h2>
      <div class="flex-row">
        {labels.map((x) => (
          <MileStone heading={x} />
        ))}
      </div>
    </>
  );
};

export default MilestoneListComponent;
