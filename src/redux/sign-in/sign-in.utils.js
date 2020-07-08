export const formSubmit=(userAuth)=>{
 return userAuth.map(()=>({
     email:'',password:''
 }))
}

export const formFieldChange=(userAuth, userAuthFieldToChange)=>{
    // return userAuth.map((userAuth)=>(
    //     userAuthFieldToChange.email!==userAuth.email?{
    //         ...userAuth,email:userAuthFieldToChange.email
    //     }:
    //     userAuthFieldToChange.password!==userAuth.password?{
    //         ...userAuth,password:userAuthFieldToChange.password
    //     }:
    //     {
    //         userAuth
    //     }        

    // ))

  

}