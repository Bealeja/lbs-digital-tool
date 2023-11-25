import { BarChart } from "@mui/x-charts/BarChart";
import "./HorizontalTable.scss";

const HorizontalTable = () => {
  return (
    <>
      <BarChart
        yAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 5, 3] }, { data: [2, 5, 5] }]}
      />
    </>
  );
};

export default HorizontalTable;
