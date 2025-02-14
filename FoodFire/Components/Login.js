import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../Hooks/useLocalStorage";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      "Password must contain at least one uppercase, one lowercase, one number, and one special character"
    ),
});

const Login = () => {
  const navigate = useNavigate();

  const [getLocalStorage, setLocalStorage] = useLocalStorage("user");

  useEffect(() => {
    if (getLocalStorage?.token?.length === 100) {
      navigate(-1);
    }
  }, []);

  function handleNavigate(values) {
    let index = values?.email.indexOf("@");
    let name = values?.email.slice(0, index);

    const genRandomStringNthChar = () => {
      return [...Array(100)].map(() => Math.random().toString(36)[2]).join("");
    };

    // store userName and token in localStorage
    setLocalStorage({
      ...getLocalStorage,
      userName: name,
      token: genRandomStringNthChar(),
    });

    navigate(-1);
  }

  if (getLocalStorage?.token?.length === 100) return null;

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleNavigate(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login-container">
            <div className="login-form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className="form-control inp_text"
                  id="email"
                />

                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-control"
                />

                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>

                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
