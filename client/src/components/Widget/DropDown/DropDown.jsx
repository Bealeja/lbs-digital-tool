import { useState } from "react";
import { InputLabel, Select, FormControl, MenuItem } from "@mui/material";

const DropDown = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel
        id="demo-select-small-label"
        sx={{ fontSize: "8pt", color: "white" }}
      >
        Filter
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Filter"
        onChange={handleChange}
        sx={{
          height: "30px",
          fontSize: "8pt",
          borderRadius: "15px",
          color: "white",
          backgroundColor: "#a99ed1",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          boxShadow: "1px 1px 0px rgba(0, 0, 0, 0.5)",
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Alphabetical">Alphabetical</MenuItem>
        <MenuItem value="Money Raised">Money Raised</MenuItem>
        <MenuItem value="Money Goal">Money Goal</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropDown;
