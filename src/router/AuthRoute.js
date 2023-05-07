import { useEffect } from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { routers } from "./index";

const AuthRoute = ({ children, auth }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("Token") || "";
  const location = useLocation();
  const mathchs = matchRoutes(routers, location);

  const isExist = mathchs?.some((item) => item.pathname === location.pathname);

  useEffect(() => {
    if (token === "" && auth) {
      navigate("/sign");
    }
    if (token && isExist ) {
      if (location.pathname === "/" || location.pathname === "/sign") {
        console.log(location.pathname)
        navigate("/home");
      } else {
        navigate(location.pathname);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return children;
};

export default AuthRoute;