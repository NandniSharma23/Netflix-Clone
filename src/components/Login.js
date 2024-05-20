import { useState,useRef } from "react"
import Header from "./Header"
import { checkValidData } from "../Utils/validate";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_IMG, USER_LOGO } from "../Utils/constants";

const Login = () => {
  
const [isSignInForm,setIsSignInForm]=useState(true);
const [errorMessage,setErrorMessage]=useState(null);
const dispatch = useDispatch();
const email=useRef(null);
const password=useRef(null);
const name=useRef(null);

const handleButtonClick=()=>{
    const msg=checkValidData(email.current.value,password.current.value);
    setErrorMessage(msg);
    if(msg) return;
    
    if(!isSignInForm){
        createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
        )
        .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
            displayName: name.current.value, 
            photoURL:USER_LOGO
          }).then(() => {
            // Profile updated!
                        
            const {uid,email,displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        
            // ...
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.msg);
            // ...
          });
    
     })
      .catch((error) => {
       const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+ " "+errorMessage);

     });
    }
    else{
        signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value    
        )
       .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
    
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode +" "+ errorMessage);
      });
    }


}
   
const toggleSignInform=()=>{
    setIsSignInForm(!isSignInForm);
};
 
    
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src={BG_IMG} 
            alt="Bg-img"/>;
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="bg-black absolute p-10 w-3/12  my-40 mx-auto right-0 left-0 text-white bg-opacity-80" >
            <h1 className=" font-bold text-3xl py-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm &&(<input ref={name}  type="text" placeholder="First Name"  className="p-3 my-2 w-full rounded-md bg-transparent border border-gray-500"/>)}
            <input ref={email} 
            type="text" placeholder="Email Address" className="p-3 my-2 w-full rounded-md bg-transparent border border-gray-500"
            /> 
            <input ref={password}
             type="password" placeholder="password" className="p-3 my-2 w-full rounded-md bg-transparent border border-gray-500"
             />
            <p className="text-red-600 font-bold p-2">
                {errorMessage}  
            </p>
            <button onClick={handleButtonClick} className="p-2 my-2 bg-red-700 w-full rounded-md">
                {isSignInForm?'Sign In':'Sign Up'}
            </button>
            <p className="p-2 cursor-pointer"onClick={toggleSignInform}>
                {isSignInForm ? 'New to Netflix? Sign up now':'Already Registered? Sign In Now.'}
            </p>
        </form>
    </div>
  )
}

export default Login