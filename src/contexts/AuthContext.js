import "@azure/core-asynciterator-polyfill";
import { Auth, DataStore, Hub } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { Patient } from "../models";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(undefined);
  const [dbUser, setDbUser] = useState(undefined);
  const sub = authUser?.attributes.sub;
  console.log("sub ctx:", sub);

  checkAuth = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setAuthUser(user);
    } catch (e) {
      setAuthUser(null);
    }
  };

  loadUser = async () => {
    const users = await DataStore.query(Patient, (usr) => usr.sub.eq(sub));
    setDbUser(users[0]);
    console.log("dbUser :", dbUser);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    const listner = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkAuth();
      }
    };
    Hub.listen("auth", listner);
    return () => Hub.remove("auth", listner);
  }, []);

  useEffect(() => {
    loadUser();
  }, [sub]);

  return (
    <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
