import { Formik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [userlogin, setLogin] = useState(null);

  //Define states that will set the page to either login or register
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const navigate = useNavigate();

  const register = async (values, onSubmitProps) => {
    //create new from
    const formData = new FormData();

    //store submitted values in form
    for (let value in values) {
      formData.append(value, values[value]);
    }

    //POST form to backend for authentication
    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    //Await POST response, clear form
    const savedUser = await savedUserResponse;
    onSubmitProps.resetForm();

    //If the user already exists, set page to login
    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    //Post values to backend for comparison
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content Type": "application/json" },
      body: JSON.stringify(values),
    });

    //Await POST response, clear form
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();

    //Set user login state
    if (loggedIn) {
      setLogin({
        user: loggedIn.user,
        token: loggedIn.token,
      });

      //Navigate to home
      navigate("/");
    }
  };

  //Handle Login or Register Function based on page state
  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
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
            <div class="signup">
              <label for="chk" aria-hidden="true">
                {isLogin ? "LOGIN" : "SIGN UP"}
              </label>
              {isRegister && (
                <>
                  <input
                    placeholder="First Name"
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
                    placeholder="Last Name"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={
                      Boolean(touched.lastName) && Boolean(errors.lastName)
                    }
                    helperText={touched.lastName && errors.lastName}
                  />
                </>
              )}

              <input
                placeholder="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <input
                placeholder="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <button type="submit">{isLogin ? "LOGIN" : "REGISTER"}</button>
              <h6
                onClick={() => {
                  setPageType(isLogin ? "register" : "login");
                }}
              >
                {isLogin
                  ? "Don't have an account? Sign Up here."
                  : "Already have an account? Login here."}
              </h6>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
