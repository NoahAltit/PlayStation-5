import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home/Home";
import SignIn from "./components/Sign In/SignIn";
import GamePage from "./components/Gaming/GamePage";
import MediaPage from "./components/Media/MediaPage";

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
          <Route path={"/gaming"}>
            <GamePage />
          </Route>
          <Route path={"/media"}>
            <MediaPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
