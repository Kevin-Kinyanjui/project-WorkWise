import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import JobDetails from './JobDetails';

function FreelanceJobs() {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let [currJob, setCurrJob] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9292/freelance_tasks')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function handleClick(id) {
    setCurrJob(id);
  }

  return (
    <>
    <br />
    <div className="container">
      <div className="row">
        { currJob? <JobDetails jobId={currJob} setCurrJob={setCurrJob} /> : jobs.map((job) => (
          <JobCard key={job.id} job={job}  setCurrJob={handleClick}/>
        ))}
      </div>
    </div>
    </>
  );
}
export default FreelanceJobs;