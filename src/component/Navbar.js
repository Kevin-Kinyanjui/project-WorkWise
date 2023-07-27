import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Apply from './Apply';
import JobDetails from './JobDetails';
import Dashboard from './Dashboard';
import FreelanceJobs from './FreelanceJobs';
import AuthComponent from './AuthComponent';

 function Navbar() {
  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Jobs</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/FreelanceJobs">Freelance</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              {/* Dropdown Link */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  &#129333;
                </Link>
                {/* Dropdown Menu */}
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Dashboard">Dashboard</Link></li>
                  <li><Link className="dropdown-item" to="/Authentication">Login</Link></li>
                  {/* <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
                </ul>
              </li>
            </ul>
            {/* Search Form */}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/FreelanceJobs" element={<FreelanceJobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/jobDetails" element={<JobDetails />} />
        <Route path="/Authentication" element={<AuthComponent />} />
      </Routes>
    </Router>
    <br />
    </>
  );
};

export default Navbar;