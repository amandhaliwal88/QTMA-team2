import React from "react";
import ReactDOM from "react-dom";
import { Formik, useFormik } from "formik";
import "./styles.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { name: "", postalCode: "", phone: "", leopardSignUp: false },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form htmlFor="form" onSubmit={formik.handleSubmit}>
      <label htmlFor="text">Full Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="text">Postal Code</label>
      <input
        id="postalCode"
        name="postalCode"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.postalCode}
      />
      <label htmlFor="number">Phone Number</label>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <label htmlFor="number">Sign Up for Leopard</label>
      <input
        id="leopardSignUp"
        name="leopardSignUp"
        type="checkbox"
        onChange={formik.handleChange}
        value={formik.values.leopardSignUp}
      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

