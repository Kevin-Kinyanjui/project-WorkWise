import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9292/users/dashboard')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Dashboard</h1>
      {userData ? (
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Name: {userData.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Email: {userData.email}</h6>
                <p className="card-text">Role: {userData.role}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            {userData.role === 'job seeker' && (
              <>
                <h5 className="mt-4 mb-2">Applications</h5>
                <div className="list-group">
                  {userData.applications.map((application) => (
                    <div key={application.id} className="list-group-item">
                      <h6>{application.job_title}</h6>
                      <p>{application.job_description}</p>
                      <p>{application.job_location}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            {userData.role === 'employer' && (
              <>
                <h5 className="mt-4 mb-2">Jobs</h5>
                <div className="list-group">
                  {userData.jobs.map((job) => (
                    <div key={job.id} className="list-group-item">
                      <h6>{job.title}</h6>
                      <p>{job.description}</p>
                      <p>{job.location}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            {userData.role === 'freelancer' && (
              <>
                <h5 className="mt-4 mb-2">Freelance Applications</h5>
                <div className="list-group">
                  {userData.freelance_applications.map((task) => (
                    <div key={task.id} className="list-group-item">
                      <h6>Freelance Task ID: {task.freelance_task_id}</h6>
                      <p>{task.proposal}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Dashboard;

