import React from "react";
import "./Auth.css";

import Input from "../../FilesUpload/Components/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../FilesUpload/Util/Validators";
import { useForm } from "../../CustomHook/Form-Hook";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler=(event) =>{
    event.preventDefault();
    console.log(formState.inputs)
  }

  return (
    <form className="signin-form"  onSubmit={placeSubmitHandler}>
        
      <Input
        id="email"
        element="input"
        type="Email"
        label="E-MAIL"
        validators={[VALIDATOR_EMAIL()]}
        errorText="please enter valid Email"
        onInput={inputHandler}
      />

      <Input
        id="password"
        element="input"
        type="Password"
        label="PASSWORD"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter valid Password, with minimum 5 characters"
        onInput={inputHandler}
      />
      <button className="formButton" type= "submit" disabled={!formState.formValid} >SIGN-IN</button>
    </form>
  );
};

export default Auth;
