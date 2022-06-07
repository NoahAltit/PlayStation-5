import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home/Home";
import SignIn from "./components/Sign In/SignIn";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/signin"}>
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
