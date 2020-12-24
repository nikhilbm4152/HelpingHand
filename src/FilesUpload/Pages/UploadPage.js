import React from "react";
import { useForm } from "../../CustomHook/Form-Hook";
import Input from "../Components/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../Util/Validators";

import "./UploadPage.css";

const UploadPage = () => {
  const [formState,inputHandler] = useForm(
    {
       title: {
      value: "",
      isValid: false, // this is for the individual JSX Input in the main return statement
    },
    discription: {
      value: "",
      isValid: false,
    }
  }, false
  )

  
  
  const placeSubmitHandler=(event) =>{
    event.preventDefault();
    console.log(formState.inputs)
  }

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter valid Title"
        onInput={inputHandler}
      />
      <Input
        id="discription"
        element="textarea"
        label="Discription"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter valid discription with minimum 5 characters"
        onInput={inputHandler}
      />
      <button className="formButton" type= "submit" disabled={!formState.formValid}>Submit</button>
    </form>
  );
};

export default UploadPage;
