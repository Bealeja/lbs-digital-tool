import React from "react";
import Child from "../../../assets/child.png";
import { Formik } from "formik";
// import "../../../App.scss";

import "./index.scss";
import Navbar from "../../../components/navbarComponent";
import Banner from "../../../components/bannerComponent";
import Footer from "../../../components/footerComponent";

const PaymentPage = () => {
  return (
    <div id="payment">
      <Navbar />
      <div>
        <Banner />
      </div>
      <div class="container-this">
        <div class="item photo">
          <h2>Thank you for your donation!</h2>
          <img src={Child} alt="child" />
        </div>
        <div class="item pay">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
