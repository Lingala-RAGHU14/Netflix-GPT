import Header from "./Header";
import {useState} from "react"
const Login =  () => {
    const [isSignInForm, setisSignInForm] = useState(true)
    
    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm)
    }
        
    return (

        
        <div>
            <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9ddb442a-aca7-4d85-9cd1-dbed62f18f26/web/IN-en-20251222-TRIFECTA-perspective_a882efaa-75c8-4143-9dc1-4f9932a791ac_large.jpg" alt="bg-img" />
        </div>  

        <form className="absolute w-3/12 m-40 bg-black p-12 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="py-0.5  my-4 font-bold text-3xl">{isSignInForm ? "sign In" : "sign Up"}</h1>
        { !isSignInForm && ( <input label="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800" />)}

            <input label="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800" />
            <input label="text" placeholder="Password" className="p-4 my-4 w-full bg-gray-800" />
            <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignInForm ? "sign In" : "sign Up"}</button>
            <p className="p-4 my-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "new to netflix? sign up Now" :     "Already a user ? sign In"} </p>
        </form>
        </div>
    )
}
export default Login