import { Navigate } from 'react-router-dom'
const ProtectedRoutes = (props) => {
    // const navigate = useNavigate()
    if(localStorage.getItem("token")){
        return props.children
    }else{
       return  <Navigate to = "/login"/>
    }
}

export default ProtectedRoutes