import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Audition from "./pages/Audition";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/audition/:id">
          <Audition />
        </PrivateRoute>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, ...props }: any) {
  const isAuth = localStorage.getItem("uid");
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
