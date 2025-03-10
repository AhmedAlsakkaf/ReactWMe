import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';



const App = () => {
  return (  
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />



    </>
  )
}




export default App


{/* 

  // To summarize, propse used as a way to pass data from parent to child components.

  // to summarize, states are used to store data that can be changed within a component.

  

  // The return statement is used to render the JSX code to the DOM.


*/}