import React from "react";
import { Formik, Form, Field } from "formik";
import LoginSchema from "../../util/Schemas/LoginSchema";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              className="w-full p-2 mb-6 text-primary border-b-2 border-gray-400 bg-light outline-none focus:bg-gray-300"
              name="email"
              type="email"
              placeholder="email"
            />
            {errors.email && touched.email ? (
              <div className="text-red-400 p-2">{errors.email}</div>
            ) : null}
            <Field
              className="w-full p-2 mb-6 text-primary border-b-2 border-primary bg-light outline-none focus:bg-gray-300"
              name="password"
              placeholder="password"
            />
            {errors.password && touched.password ? (
              <div className="text-red-400 p-2">{errors.password}</div>
            ) : null}
            <button
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
