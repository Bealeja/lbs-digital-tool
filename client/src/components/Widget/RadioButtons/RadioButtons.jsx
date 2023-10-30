import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Checkbox } from "@mui/material";

const RadioButtons = () => {
  return (
    <>
      <FormControl>
        <RadioGroup row>
          <FormControlLabel value="female" control={<Radio />} label="$5" />
          <FormControlLabel value="male" control={<Radio />} label="$10" />
          <FormControlLabel value="other" control={<Radio />} label="$20" />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default RadioButtons;
