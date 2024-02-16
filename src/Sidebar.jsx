// Sidebar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import SignOut from './Signout';


const Sidebar = () => {
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
    }, []); // The empty dependency array ensures that the effect runs only once on mount  

  // Define the links and their corresponding roles
  const links = [
    { to: '/home', label: 'Home', roles: ['user-1','user-2', 'user-3'] },
    { to: '/screen1', label: 'Screen 1', roles: ['user-1', 'user-2'] },
    { to: '/screen2', label: 'Screen 2', roles: ['user-1', 'user-2'] },
    { to: '/screen3', label: 'Screen 3', roles: ['user-1', 'user-3'] },
    { to: '/screen4', label: 'Screen 4', roles: ['user-1', 'user-3'] },

  ];
  if (!authStateReady) {
    // Render a loading indicator or any component while waiting for authentication state
    return <div>Loading...</div>;}
  else{
    return (
            <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <br/>
            <h1 class="mb-4 flex items-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Booma Enterprises </h1>
              <ul className="space-y-2 font-medium">
              {links
  .filter(link => user && link.roles.includes(user.displayName))
  .map((link, index, array) => (
    <React.Fragment key={link.to}>
     <li>
      <Link
        to={link.to}
        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${location.pathname === link.to ? 'bg-gray-100' : ''}`}
      >
        {link.to === '/' ? (
            <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
      ) : (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
          </svg>
        )}
        <span className="mx-4 font-medium">{link.label}</span>
      </Link>
      </li>
    </React.Fragment>
  ))}
        <SignOut/>

              </ul>
            </div>
          </aside>
      
      );
    };    
      
  } 

export default Sidebar;
