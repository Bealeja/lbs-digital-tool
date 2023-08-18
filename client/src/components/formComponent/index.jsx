import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";

//Create register and login schemas for yup validation
const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const initialValueLogin = {
  email: "",
  password: "",
};

const Form = () => {
  //Create State that alters the page for login or register
  const [pageType, setPageType] = useState("login");

  //Define states that will set the page to either login or register
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async () => {
    //create new from
    //store submitted values in form
    //POST form to backend for authentication
    //Reset the form
    //If the user already exists, set page to login
  };

  const login = async () => {
    //Post values to backend for comparison
    //Reset the form
    //Set user login state
    //Navigate to home
  };

  const handleFormSubmit = async () => {
    //if on login page await response from login fetch
    //if on register page await response from register fetch
  };

  return (
    <>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValueLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {/* handleBlur: handles what has been touched
            handleChange: updates form values based on what was changed 
            handleSubmit: Triggers whatever is in the onSubmit when type=submit elements are triggered,
            resetForm: Resets the form
            */}
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* IF State:pageType === "register" -> display register details ELSE display login details */}
            {isRegister && (
              <>
                <label for="chk" aria-hidden="true">
                  Sign up
                </label>
                <input
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                />
                <input
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </>
            )}

            <input
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button type="submit">{isLogin ? "REGISTER" : "LOGIN"}</button>
            <h6
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </h6>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
