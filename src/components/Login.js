import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eab6047a-a101-4a14-8515-c67563fa2205/US-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
      alt='netflix'/>
      </div>
      <form className='absolute p-12 bg-black w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {
            !isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>)}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>
        
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'> 
           {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className='py-4 flex'>
        <p className=' text-gray-400'> 
        {isSignInForm ? "New to Netflix " : ""}   
        </p>
        <p className='ml-2 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "Sign up Now" : "Already registered? Sign In now"}
        </p>
        </div>
       
      </form>

    </div>
  )
}

export default Login
