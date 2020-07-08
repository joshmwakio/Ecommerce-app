import signInActionTypes from './sign-in.actiontypes'
import {formSubmit,} from './sign-in.utils'
const INITIAL_STATES={
    userAuth:[]
}

const signInReducer=(states=INITIAL_STATES,action)=>{
    switch(action.type){
        case signInActionTypes.FORM_SUBMIT:
            return{
                ...states,userAuth:formSubmit(states.userAuth)
            }
        case signInActionTypes.FIELD_CHANGE:
            return{
                ...states,userAuth: []
            }
        default:
            return states;
    }
}
export default signInReducer