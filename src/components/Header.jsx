import { signOut } from "firebase/auth";
import {auth} from "../utils/Firebase";
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"
import {useSelector,useDispatch} from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        
        
        }).catch((error) => {
        // An error happened.
        });
    }
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse")
            // ...
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/")
          }
        });
        return () => unsubscribe
      }, [dispatch]);
    return (
        <div className="absolute w-screen py-2 px-10 bg-gradient-to-b  from-black z-10 flex justify-between ">
            <img 
            className="w-44"
            src={LOGO} alt="logo"  />

            <div className="flex">
                {user &&  <img src={user.photoURL} alt="photoURL" className="w-12 m-2 p-3/12 h-12" />}
                {user && user.displayName && <span className="text-white m-4 p-2">{user.displayName}</span>}
                {
                  user &&  <button className="font-bold text-white bg-red-500 m-4 p-2 rounded-lg" onClick={handleSignOut}>Sign Out</button>
                }
            </div>
        </div>
    )
}
export default Header;