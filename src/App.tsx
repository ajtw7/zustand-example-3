import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import "./App.css";
import { Athletes } from "./components/Athletes";
import Cookies from "./components/Cookies";
import { Input } from "./components/Input";
import { TextField } from "@mui/material";
import Example from "./components/example";

// Define Inputs for Form
interface IFormInputs {
  email: string;
  password: string;
}

function App() {
  // Deconstruct methods for useForm

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    // add type for useForm so it knows what types to expect
  } = useForm<IFormInputs>();

  // logs
  console.log("errors", errors);
  console.log("watch variable email", watch("email"));
  console.log("watch variable password", watch("password"));

  // The "form state" w/in the SubmitHandler can be accessed by passing in a parameter (i.e. data) w/ a type
  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log("form data is", data);
  };

  return (
    <div className="App">
      <Athletes />
      <Example />
      <Input />
      <Cookies />

      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name="email"
          control={control}
          defaultValue="example@ajtw.test.dev"
          render={({ field }) => (
            <TextField
              {...field}
              label="test"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email ? errors.email?.message : ''}
            />
          )}
        />
        {/* <input {...register("email")} /> */}
        {errors.email && <span>This field is required</span>}
        <br />
        <br />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password ? errors.password?.message : ''}
            />
          )}
          />
        {/* <input {...register("password", { required: true })} /> */}
        <br />
        <br />
        <input type={"submit"} />
        {/* nothing will happen until a "submit function is added to the form" */}
      </form>
    </div>
  );
}

export default App;
