import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true; //helper variable  
        for(const inputID in state.inputs){
          if(inputID===action.inputId){
            formIsValid=formIsValid && action.isValid
          }else{
            formIsValid=formIsValid && state.inputs[inputID].isValid
          }
        }
        return{
          ...state,
          inputs:{
            ...state.inputs,
            [action.inputId]:{value : action.value, isValid: action.isValid}
  
          },
          formValid:formIsValid
        };
       default:
        return state;
    }
  };

export const useForm = (initialInputs,initialFormValidity) => {
    const[formState, dispatch]= useReducer(formReducer, {
        inputs: initialInputs,  // nested object for individual JSX input,,isValid: false, // this is for the individual JSX Input in the main return statement
        formValid: initialFormValidity, // to verify overall form is valid or not
      });

      const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: 'INPUT_CHANGE',value:value,isValid:isValid,inputId:id})
      }, []);

      
   return[formState,inputHandler] 
};



 
