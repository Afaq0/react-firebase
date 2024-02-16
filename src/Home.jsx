
// SignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Home = () => {

  return (
    <div>
      <Sidebar/>
      <div className="p-4 sm:ml-64">
      <h2>Homepage</h2>
      </div>

    </div>
  );
};


export default Home;
