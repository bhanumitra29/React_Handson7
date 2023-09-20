import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import Contactus from './Contactus';
import EditStudent from './EditStudent';
import NewStudent from './NewStudent';

const RouteCompo = () => {
  return (
    <div>
      <BrowserRouter>
      <div className="navbar">
        <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to='/' className="link">Home</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to='/students' className="link">Students</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to='/contactus' className="link">Contact Us</NavLink>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/etitstudent" element={<EditStudent />} />
          <Route path="/addstudent" element={<NewStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteCompo;
