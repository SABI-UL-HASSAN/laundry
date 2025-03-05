import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router} from "react-router-dom";
import { FaTshirt } from "react-icons/fa"; 

import Navbar from "./components/Navbar"; 
import "./components/Navbar.css";

import Hero from "./components/Hero"
import "./components/Hero.css";

import Process from './components/Process';
import "./components/Process.css";

import Services from './components/Services';
import "./components/Services.css";

import Call from './components/Call';
import "./components/Call.css";

import Company from './components/Company';
import "./components/Company.css";

import Contact from './components/Contact'; 
import "./components/Contact.css";

import './App.css';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <Process />
        <Services/> 
        <Call
          call={() => toast.success("Thank you for your call! We will get back to you soon.")} 
        />
      <Company/>
      <Contact
        contact={() => toast.success("Thank you for your message! We will get back to you soon.")}
      />

        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;