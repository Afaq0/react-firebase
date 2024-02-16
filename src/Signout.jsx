// SignOutButton.js
import React from 'react';
import { auth } from './firebase'; // Import your firebase.js file

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      console.log('Sign-out successful.');
    } catch (error) {
      console.error('Error during sign-out:', error.message);
    }
  };

  return (
    <li>
      <a href="" onClick={handleSignOut} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13.828 2.172a4 4 0 0 1 5.656 5.656 1 1 0 0 1-1.414 1.414 2 2 0 0 0-2.828 0 2 2 0 0 0 0 2.828 1 1 0 0 1-1.414 1.414 4 4 0 0 1-5.656-5.656 4 4 0 0 1 0-5.656 1 1 0 0 1 1.414 0zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path>
          <path d="M13 2a8.963 8.963 0 0 0-7.469 14H7a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5.156A8.935 8.935 0 0 0 13 18a8.963 8.963 0 0 0 7.469-14H13a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5.156A8.935 8.935 0 0 0 13 2Z"></path>
        </svg>
        <span className="mx-4 font-medium">Sign Out</span>
      </a>
    </li>
  );
};

export default SignOut;
