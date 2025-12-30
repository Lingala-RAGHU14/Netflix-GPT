import Header from "./Header";
import { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase" 
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice";
import {updateProfile } from "firebase/auth";



const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const name = useRef(null) 
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {

    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);
    if(message) return;

    if(!isSignInForm) {
        // sign up  sign up logic

    createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
        displayName: name.current.value , photoURL: "https://media.licdn.com/dms/image/v2/D5603AQGQtUxLPN4NoA/profile-displayphoto-scale_200_200/B56ZqQdvfgHQAY-/0/1763360309661?e=1768435200&v=beta&t=3kW58J6lxkO_RiFiWc5J3n1leRzihCJPOqO07zsPpqk"
        }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email,displayName: displayName, photoURL: photoURL})) 
        
        navigate("/browse")
        }).catch((error) => {
        // An error occurred
        // ...
        seterrorMessage(error.message)
        });
        console.log(user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "-" + errorMessage)
        // ..
    });
    }
    else {
        // sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "-" + errorMessage)
    seterrorMessage(errorCode + "-" + errorMessage)
  });

    }

    
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_large.jpg"
          alt="bg-img"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 m-40 bg-black/80 p-12 mx-auto right-0 left-0 text-white rounded-lg "
      >
        <h1 className="py-0.5  my-4 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
           
          <input
            ref={name}
            label="text"
            placeholder="User Name"
            className="p-4 my-3 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          label="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700"
        />
        <input
          ref={password}
          label="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700"
        />
        <p className="p-2 -my-0.5 text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-3 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 my-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User ? Sign In"}{" "}
        </p>
      </form>
    </div>
  );
};
export default Login;
