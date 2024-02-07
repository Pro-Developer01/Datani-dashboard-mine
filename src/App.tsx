import ForgotPassword from "./components/login/ForgotPassword";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from "react";


const App = () => {
  console.log('hi');
  
  useEffect(()=>{
  },[])
 return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
 );
};

export default App;
