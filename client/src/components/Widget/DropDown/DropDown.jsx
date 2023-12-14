import { useState } from "react";
import { InputLabel, Select, FormControl, MenuItem } from "@mui/material";

const DropDown = ({ updateFilterState, filter }) => {
  const handleChange = (event) => {
    updateFilterState(event.target.value);
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
        value={filter}
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
        <MenuItem value="5km">5km</MenuItem>
        <MenuItem value="10km">10km</MenuItem>
        <MenuItem value="15km">15km</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropDown;
