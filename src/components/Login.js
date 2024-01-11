import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BACKGROUND, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const msg = checkValidData(email.current.value, password.current.value);
    setErrMessage(msg);

    if (msg) return; // if msg is present, return and end

    // Otherwise, signin signup logic
    if (!isSignInForm) {
      // Signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage + " " + errorCode);
        });
    } else {
      // Signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage + " " + errorCode);
        });
    }
  };

  return (
    <div className="flex flex-col h-screen items-center ">
    <Header />
    <div className="flex-grow relative">
      <img
        src={NETFLIX_BACKGROUND}
        alt="netflix"
        className="w-full h-full object-cover"
      />
    </div>
    <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-4 sm:p-8 w-full sm:w-11/12 md:w-6/12 lg:w-4/12  lg:mt-40 mt-36  text-white rounded-lg flex flex-col items-center bg-opacity-80 bg-black"
      >
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl py-2 md:py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignInForm && (
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-3 my-3 w-full bg-gray-800 rounded-lg"
        />
      )}
      <input
        ref={email}
        type="text"
        placeholder="Email Address"
        className="p-3 my-3 w-full bg-gray-800 rounded-lg"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="p-3 my-3 w-full bg-gray-800 rounded-lg"
      />
      <p className="text-red-600 text-sm font-bold py-2">{errMessage}</p>
      <button
        className="p-3 my-4 bg-red-700 w-full rounded-lg"
        onClick={handleButtonClick}
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p className="ml-2 text-gray-400 text-sm">Need Help? </p>
      <div className="py-2 md:py-4 flex">
        <p className="text-gray-400 ml-2">
          {isSignInForm ? "New to Netflix   " : ""}
        </p>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? " Sign up Now " : "Already registered? Sign In now"}
        </p>
      </div>
    </form>
  </div>
  );
};

export default Login;
