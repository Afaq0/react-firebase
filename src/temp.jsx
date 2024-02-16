import React, { useEffect, useState } from 'react';
import { auth } from './firebase'; // Adjust the path to match the actual location of your firebase module
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Temp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This function will be called when the component mounts
    const unsubscribe = onAuthStateChanged(auth,(authUser) => {
      // authUser will be null if no user is signed in
      // or an object containing user information if a user is signed in
      setUser(authUser);
    });

    // This function will be called when the component unmounts
    return () => {
      unsubscribe(); // Unsubscribe from the onAuthStateChanged event
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount
  

  return (
    <div>
      {user ? (
        <p>Welcome, {user.displayName}!</p>
      ) : (
        <p>Please sign in.</p>
      )}
    </div>
  );
};

export default Temp;
