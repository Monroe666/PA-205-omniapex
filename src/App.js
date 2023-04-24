import {
  Route,
  Routes,
} from "react-router-dom";
import { routers } from "./router";
// import AuthRoute from "./router/AuthRoute";

const App = () => {

  const RouteAuthFun = (
    (routeList) => {
      return routeList.map(
        (item) => {
          return (
            <Route
              path={item.path}
              element={
                // <AuthRoute auth={item.auth} key={item.path}>
                //   {item.element}
                // </AuthRoute>
                item.element
              }
              key={item.path}
            >
              {item?.children && RouteAuthFun(item.children)}
            </Route>
          );
        }
      );
    }
  );
  return <Routes>{RouteAuthFun(routers)}</Routes>;
};

export default App;