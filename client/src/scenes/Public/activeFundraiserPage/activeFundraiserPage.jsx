import { Box, Grid } from "@mui/material";

const ActiveFundraiserPage = (id) => {
  return (
    <Box>
      <Grid>
        <Grid item>
          <Box>
            <Box>Photo</Box>
            <Box>Heading</Box>
            <Box>Description</Box>
          </Box>
        </Grid>
      </Grid>
      <Grid item>
        <Box>Members List</Box>
      </Grid>
    </Box>
  );
};

export default ActiveFundraiserPage;
