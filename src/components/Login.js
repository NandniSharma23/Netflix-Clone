import { useState } from "react"
import Header from "./Header"

const Login = () => {
  
const [isSignInForm,setIsSignInForm]=useState(true);
   
const toggleSignInform=()=>{
    setIsSignInForm(!isSignInForm);
};
 
    
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="Bg-img"/>;
        </div>
        <form className="bg-black absolute p-10 w-3/12  my-40 mx-auto right-0 left-0 text-white bg-opacity-80" >
            <h1 className=" font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm &&(<input type="text" placeholder="First Name"  className="p-3 my-2 w-full rounded-md bg-transparent border border-gray-500"/>)}
            {!isSignInForm && (<input type="text" placeholder="Last Name"  className="p-3 my-2 w-full rounded-md bg-transparent border border-gray-500"/>)}
            <input type="text" placeholder="Email Address" className="p-3 my-2 w-full rounded-md bg-transparent border border-gray-500"/> 
            <input type="password" placeholder="password" className="p-3 my-2 w-full rounded-md bg-transparent border border-gray-500"/>
            <button className="p-2 my-2 bg-red-700 w-full rounded-md">{isSignInForm?'Sign In':'Sign Up'}</button>
            <p className="p-2 cursor-pointer"onClick={toggleSignInform}>{isSignInForm ? 'New to Netflix? Sign up now':'Already Registered? Sign In Now.'}</p>
        </form>
    </div>
  )
}

export default Login