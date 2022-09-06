import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import FormRegister from './Components/FormRegister';
import FormLogin from './Components/FormLogin';
import Home from './Components/Home';
import Amenities from './Components/Amenities';
import Rooms from './Components/Rooms';
import Gallery from './Components/Gallery';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './Components/Meals';
import Footer from './Components/footer';
import CheckingAvailability from './Components/CheckingAvailability'
import ResetPassword from './Components/ResetPassword';
import BookNow from './Components/BookNow';
import BookNow2 from './Components/BookNow2';
import BookNow3 from './Components/BookNow3';

import { Route, Routes } from "react-router-dom";
import {collection, getDocs} from 'firebase/firestore'

function App() {

  const [modalShow, setModalShow] = React.useState(false);


  return (

    
    <div className='App'>
      <div className="container">

      <Routes>
        <Route path="/" exact element={<FormLogin />} />
        <Route path='resetpassword' element={<ResetPassword/>}/>
        <Route path="register" exact element={<FormRegister />} />
        <Route path="home" exact element={<Home />} />
        <Route path="book" exact element={<BookNow/>} />
        <Route path="book2" exact element={<BookNow2/>} />
        <Route path="book3" exact element={<BookNow3/>} />
      </Routes>


  </div>
    </div>
  );
}

export default App;
