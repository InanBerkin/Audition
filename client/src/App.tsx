import { Box } from "@chakra-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import AllAuditions from "./pages/AllAuditions";
import AppliedAuditions from "./pages/AppliedAuditions";
import Audition from "./pages/Audition";
import CreateAudition from "./pages/CreateAudition";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import PostedAuditions from "./pages/PostedAuditions";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Talents from "./pages/Talents";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/profile/:id?">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/audition/:id">
          <Audition />
        </PrivateRoute>
        <PrivateRoute path="/auditions">
          <AllAuditions />
        </PrivateRoute>
        <PrivateRoute path="/applied-auditions">
          <AppliedAuditions />
        </PrivateRoute>
        <PrivateRoute path="/posted-auditions">
          <PostedAuditions />
        </PrivateRoute>
        <PrivateRoute path="/talents">
          <Talents />
        </PrivateRoute>
        <PrivateRoute path="/create-audition">
          <CreateAudition />
        </PrivateRoute>
        <PrivateRoute path="/messages/:id?">
          <Messages />
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
            <Box>{children}</Box>
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
