import SignInActionTypes from './sign-in.actiontypes'

export const formSubmit=(values)=>({
    type:SignInActionTypes.CLEAR_VALUE,
    payload:values
});

export const fieldChange=(values)=>({
    type:SignInActionTypes.FIELD_CHANGE,
    payload:values
});