import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
   
        apiKey: "AIzaSyCvK_vsHyJT_BAli_nwws_61zUcoU6627A",
        authDomain: "josh-crwn-clothing-store.firebaseapp.com",
        databaseURL: "https://josh-crwn-clothing-store.firebaseio.com",
        projectId: "josh-crwn-clothing-store",
        storageBucket: "josh-crwn-clothing-store.appspot.com",
        messagingSenderId: "883173874700",
        appId: "1:883173874700:web:2fa74b9b4e3a4088a76229",
        measurementId: "G-0G5660K0LT"
      
}
firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const signInProvider=new firebase.auth.GoogleAuthProvider();

signInProvider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle=()=>auth.signInWithPopup(signInProvider);

export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) {
        return
    }
    else{
       
        const userRef=firestore.doc(`users/${userAuth.uid}`);
        const snapshot=await userRef.get();
        if(!snapshot.exists){
            const{displayName,email}=userAuth;
            console.log(displayName);
            const createdAt=new Date();
            try{
            
             await userRef.set({displayName,email,createdAt,...additionalData});
             }
            catch(error){
                console.log('error creating user', error.message)
            }
        }
        return userRef;
    }
}

export default firebase;




