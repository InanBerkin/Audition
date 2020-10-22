import React, { useState, useEffect, useContext, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { FirebaseConfig } from "../firebase.config";
import { SignInFormData, SignUpFormData } from "../types";

type AuthContextType = {
  user: firebase.User | null;
  token: string | null;
  isAuth: boolean;
  signin: (data: SignInFormData) => Promise<firebase.User | null>;
  signup: (data: SignUpFormData) => Promise<firebase.User | null>;
  signout: () => Promise<void>;
};

// Add your Firebase credentials
firebase.initializeApp(FirebaseConfig);

const authContext = createContext<AuthContextType | null>(null);

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  const context = useContext(authContext);
  if (context === null) {
    throw new Error("AuthContext is undefined");
  }
  return context;
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState<firebase.User | null>(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = ({ email, password }: SignInFormData) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signup = ({ email, password }: SignUpFormData) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const token = await user.getIdToken();
        localStorage.setItem("token", token);
      } else {
        setUser(null);
        localStorage.removeItem("token");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    token: localStorage.getItem("token"),
    isAuth: localStorage.getItem("token") !== null,
    signin,
    signup,
    signout,
  };
}
