import Redirect from "./Redirect"
import { useSelector } from "react-redux/es/hooks/useSelector"

const PrivateRoute=({children})=>{
  const{authenticated}=useSelector(state=>state.auth)
  return authenticated ? children : <Redirect/>
}

export default PrivateRoute