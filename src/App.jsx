import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJobs from './pages/AddJobs';
import JobPage, {jobLoader} from './pages/JobPage';
import About from './pages/About';
import Contact from './pages/Contact';

const addJob = (newJob) => {
  console.log(newJob);
}


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}/>
        <Route path='/add-job' element={<AddJobs addJobSubmit={addJob}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
);


const App = () => {
  return <RouterProvider router = {router} />;
};




export default App













{/* 

  // To summarize, propse used as a way to pass data from parent to child components.

  // to summarize, states are used to store data that can be changed within a component.

  

  // The return statement is used to render the JSX code to the DOM.


*/}