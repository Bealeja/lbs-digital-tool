import { BarChart } from "@mui/x-charts/BarChart";

const HorizontalBar = () => {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
      series={[
        { data: [4, 3, 5], color: "#9ed1a9" },
        { data: [1, 6, 3], color: "#9eb9d1" },
        { data: [2, 5, 6], color: "#d19eb9" },
      ]}
      width={700}
      height={418}
    />
  );
};

export default HorizontalBar;
