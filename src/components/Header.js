import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useEffect } from "react";
import { MAIN_LOGO } from "../Utils/constants";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector (store => store.user)
  const handleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName, photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    })
    return () => unsubscribe();

  },[]);

  return (
    <div className="absolute w-screen px-15 py-15 mx-15 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48  " 
      src={MAIN_LOGO} 
      alt="logo"/>
      {user && <div className="py-4">
       <img className="h-9" src={user?.photoURL}alt="SignoutIcon"/>
       <button onClick={handleSignOut} className="font-bold text-white" >SignOut</button>
      </div>
      }
      

    </div>
   
  );
};

export default Header;