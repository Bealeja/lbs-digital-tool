import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <Container fixed>
        <Box
          component="section"
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: "h2.fontSize",
              fontFamily: "figtree",
              fontWeight: "bold",
            }}
          >
            Our Mission
          </Typography>
          <Typography
            sx={{
              fontSize: "h6.fontSize",
              fontFamily: "Figtree",
            }}
          >
            At Little Big Steps, we're commited to supporting those children in
            need of physical excersise to battle the effects of ongoing cancer
            treatment.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#a99ed1",
              fontFamily: "Figtree",
              fontSize: "h6.fontSize",
            }}
          >
            Learn More
          </Button>
        </Box>
        <Box
          component="section"
          sx={{
            m: 1,
            p: 2,
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: "h2.fontSize",
              fontFamily: "poppins",
              fontWeight: "bold",
            }}
          >
            Donate
          </Typography>
          <RadioButtons />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#805ec5",
              fontFamily: "Poppins",
              fontSize: "h6.fontSize",
            }}
          >
            Donate
          </Button>
        </Box>

        <Box sx={{ m: 1, p: 2, backgroundColor: "white", borderRadius: "8px" }}>
          <Typography
            sx={{
              fontSize: "h2.fontSize",
              fontFamily: "poppins",
              fontWeight: "bold",
            }}
          >
            Our Goals
          </Typography>
          <Box>
            <HorizontalBar />
          </Box>
        </Box>
      </Container>
      ;
    </div>
  );
};

export default AboutUsPage;
