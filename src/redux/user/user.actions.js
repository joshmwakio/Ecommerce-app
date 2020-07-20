import {userActionTypes} from './user.action_types'

export const googleSignInStart=()=>({
    type:userActionTypes.GOOGLE_SIGN_IN_START
})

export const SignInSuccess=user=>({
    type:userActionTypes.SIGN_IN_SUCCESS,
    payload:user
})
export const SignOutFailure=error=>({
    type:userActionTypes.SIGN_OUT_FAILURE,
    payload:error
})
export const SignOutSuccess=()=>({
    type:userActionTypes.SIGN_OUT_SUCCESS
})
export const SignOutStart=()=>({
    type:userActionTypes.SIGN_OUT_START
})
export const SignInFailure=(error)=>({
    type:userActionTypes.SIGN_IN_FAILURE,
    payload:error
})
export const CheckUserSession=()=>({
    type:userActionTypes.CHECK_USER_SESSION
})
export const emailSignInStart=(userAuth)=>({
    type:userActionTypes.EMAIL_SIGN_IN_START,
    payload:userAuth
})
export const emailSignUpStart=(userAuth)=>({
    type:userActionTypes.SIGN_UP_START,
    payload:userAuth
})

export const SignUpSuccess=({user,additionalData})=>({
    type:userActionTypes.SIGN_UP_SUCCESS,
    payload:{user,additionalData}
})

export const SignUpFailure=(error)=>({
    type:userActionTypes.SIGN_UP_FAILURE,
    payload:error
})


