import { Navigate ,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequireAuth=({children})=>{
    const location =useLocation();
    const { token } = useSelector((state) => state.auth)
    return token ?
        children
    :
    <Navigate to="/loginPage" state= {{from:location}} replace/>
}
