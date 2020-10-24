import { theme, ChakraProvider } from "@chakra-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
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
            <Header />
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
