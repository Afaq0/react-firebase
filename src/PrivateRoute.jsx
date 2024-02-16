// PrivateRoute.js
import React,{useEffect, useState} from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";


const PrivateRoute = ({ element, allowedRoles, displayName }) => {
  const [user, setUser] = useState({});
  const [authStateReady, setAuthStateReady] = useState(false);


  useEffect(() => {
    // This function will be called when the component mounts
    const unsubscribe = onAuthStateChanged(auth,async (authUser) => {
      // authUser will be null if no user is signed in
      // or an object containing user information if a user is signed in
      setAuthStateReady(true);
      setUser(authUser);
    });

    // This function will be called when the component unmounts
    return () => {
      unsubscribe(); // Unsubscribe from the onAuthStateChanged event
    };
  }, [])
  if (!authStateReady) {
    // Render a loading indicator or any component while waiting for authentication state
    return <div>Loading...</div>;}

  else if (user && allowedRoles.includes(user.displayName)) {
    return element;
  } else {
    // Redirect to login or another page
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
