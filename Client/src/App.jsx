import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feedback from './components/Feedback';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>

  );
};

export default App;
