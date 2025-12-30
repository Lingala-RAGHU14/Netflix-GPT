import { signOut } from "firebase/auth";
import {auth} from "../utils/Firebase";
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux";
const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")

        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <div className="absolute w-screen py-2 px-10 bg-gradient-to-b  from-black z-10 flex justify-between">
            <img 
            className="w-44"
            src="
            https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"  />

            <div className="flex">
                {user && <img src={user.photoURL} alt="photoURL" className="w-12 m-2 p-3/12 h-12" />}
                {
                  user &&  <button className="font-bold text-white bg-red-500 m-4 p-2 rounded-lg" onClick={handleSignOut}>Sign Out</button>
                }
            </div>
        </div>
    )
}
export default Header;