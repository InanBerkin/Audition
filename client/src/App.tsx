import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
import Axios from "axios";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

Axios.defaults.baseURL = "http://localhost:5000/api";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

function PrivateRoute({ children, ...props }: any) {
  // const { isAuth } = useAuth();
  const isAuth = true;
  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuth ? (
          <>
            {children}
            <BottomNav />
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
