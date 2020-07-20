import {takeLatest,put,all,call} from 'redux-saga/effects'
import {userActionTypes} from './user.action_types'
import {SignInFailure,SignInSuccess,SignOutFailure,SignOutSuccess,SignUpSuccess,SignUpFailure} from './user.actions'
import {createUserProfileDocument,signInWithGoogle, auth,getCurrentUser} from '../../firebase/firebase.utils'
export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,googleSignIn)
}
export function* getTheSnapshot(user,additionalData){
  try{
  const userRef=yield call(createUserProfileDocument,user,additionalData)
  const userSnapshot=yield userRef.get();
  console.log(userSnapshot.data());
  yield put(SignInSuccess({id:userSnapshot.id,...userSnapshot.data()}))
   }
  catch(error){
    yield put(SignInFailure(error))}
}
export function* googleSignIn(){
  try{
  const {user}=yield signInWithGoogle();
  yield getTheSnapshot(user);
  }
  catch(error){
    yield put(SignInFailure(error))
  }
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,emailSignIn)
}

export function* emailSignIn({payload:{email,password}}){
    try{
        const {user}= yield auth.signInWithEmailAndPassword(email,password);
        yield getTheSnapshot(user)
    }
    catch(error){
        yield put(SignInFailure(error))
    }
}
export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}
export function* isUserAuthenticated(){
    const userAuth=yield getCurrentUser();
    if(!userAuth){
        return
    }
    else{
        yield getTheSnapshot(userAuth);
    }
}
export function* signOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START,signOut)
}
export function* signOut(){
    try{
        yield auth.signOut()
        yield put(SignOutSuccess());
    }
    catch(error){
        yield put(SignOutFailure(error))
    }
}
export function* signUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START,signUp)
}
export function* signUp({payload:{email,password,displayName}}){
   try{
        const {user}= yield auth.createUserWithEmailAndPassword(email,password);
        yield put(SignUpSuccess({user,additionalData:{displayName}}))

   }
   catch(error){
        yield put(SignUpFailure(error))
   }
}
export function* onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}

export function* signInAfterSignUp({payload:{user,additionalData}}){
    yield getTheSnapshot(user,additionalData)
}
export function* userSagas(){
    yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(signOutStart),call(signUpStart),call(onSignUpSuccess)])
}
