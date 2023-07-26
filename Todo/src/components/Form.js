import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ApolloClient, InMemoryCache, ApolloProvider, gql ,useMutation} from '@apollo/client';



const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  
});

const initialValues = {
  name: "",
  email: "",
  password: "",

};


function Formc({ addHandler }) {
  const [item, setInput] = useState("");
  const CREATE_USER = gql`mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }`;
  const [addUser, { data, loading, error }] = useMutation(CREATE_USER);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
     
      const data= addUser({ variables: { input: values } });

      action.resetForm();
    },
  });



  const submitHandler = (event) => {
    event.preventDefault();
    addHandler(item);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="input-block">
      <label htmlFor="name" className="input-label">
        Name
      </label>
      <input
        type="name"
        autoComplete="off"
        name="name"
        id="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && touched.name ? (
        <p className="form-error">{errors.name}</p>
      ) : null}
    </div>
    <div className="input-block">
      <label htmlFor="email" className="input-label">
        Email
      </label>
      <input
        type="email"
        autoComplete="off"
        name="email"
        id="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email ? (
        <p className="form-error">{errors.email}</p>
      ) : null}
    </div>
    <div className="input-block">
      <label htmlFor="password" className="input-label">
        Password
      </label>
      <input
        type="password"
        autoComplete="off"
        name="password"
        id="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && touched.password ? (
        <p className="form-error">{errors.password}</p>
      ) : null}
    </div>

 
      <button className="input-button" type="submit">
        Registration
      </button>

  </form>
  );
}

export default Formc;
