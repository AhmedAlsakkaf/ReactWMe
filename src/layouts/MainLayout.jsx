import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return( 
  <>
    <ToastContainer />
    <Navbar />
    <Outlet />
    <Footer />
  </>
  );

};

export default MainLayout