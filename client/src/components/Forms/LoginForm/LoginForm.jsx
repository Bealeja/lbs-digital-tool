import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useState } from "react";
import { handleFormSubmit } from "./Utils/FormUtils.js";

const Form = () => {
  const [FormType, setFormType] = useState("Login"); //Create State that alters the page for login or register

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {FormType == "Login" ? "Login" : "Sign Up"}
        </Typography>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SignUpFields setFormType={setFormType} FormType={FormType} />
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

const SignUpFields = ({ setFormType, FormType }) => {
  const setForm = (state) => {
    setFormType(state); // Allows Form to Change Between Login and Sign Up on Link Click
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={(e) => handleFormSubmit(e, e.target)}
    >
      <Grid container spacing={2}>
        {FormType == "Sign Up" ? (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
          </>
        ) : (
          <></>
        )}
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {FormType == "Login" ? "Login" : "Sign Up"}
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          {FormType == "Login" ? (
            <Link variant="body2" onClick={() => setForm("Sign Up")}>
              Already have an account? Sign in
            </Link>
          ) : (
            <Link variant="body2" onClick={() => setForm("Login")}>
              Don't have an account? Login
            </Link>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Form;
