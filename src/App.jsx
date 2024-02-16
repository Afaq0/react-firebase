// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import SignUp from './SignUp';
import Screen1 from './Screen1';
import Home from './Home';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import ForgotPassword from './ForgotPassword';




const App = () => {

 
    return (
      <Router>


          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot" element={<ForgotPassword/>} />

            <Route path="/signup" element={<SignUp/>} />
            <Route path="/home" element={<PrivateRoute element={<Home />} allowedRoles={['user-1','user-2','user-3']} />} />
            <Route path="/screen1" element={<PrivateRoute element={<Screen1 />} allowedRoles={['user-1', 'user-2']} />} />
            <Route path="/screen2" element={<PrivateRoute element={<Screen2 />}  allowedRoles={['user-1', 'user-2']} />} />
            <Route path="/screen3" element={<PrivateRoute element={<Screen3 />}  allowedRoles={['user-1', 'user-3']} />} />
            <Route path="/screen4" element={<PrivateRoute element={<Screen4 />}  allowedRoles={['user-1', 'user-3']} />} />
            <Route path="/unauthorized" render={() => <div>Unauthorized Access</div>} />
          </Routes>
      </Router>
    );  
};

export default App;
