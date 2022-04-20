import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const useIsAuth = ()=>{
  const navigate = useNavigate();
  const isAuth = useSelector(state=>state.auth.isAuth);
  useEffect(()=>{
    if (!isAuth) {
      navigate("/action/not-found",{
        message:"Page not found",
        actions:[
          {
            label:"Go to home page.",
            path:"/"
          }
        ]
      });
    }
  },[isAuth, navigate]);
}

export default useIsAuth;