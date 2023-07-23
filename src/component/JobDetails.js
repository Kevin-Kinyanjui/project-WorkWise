import React, { useEffect, useState } from 'react';

function JobDetails({ jobId, setCurrJob }) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9292/jobs/${jobId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((jsonData) => {
        setJob(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [jobId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

const splitRequirements = job.requirements.split('. ');

  function handleClick() {
    alert('Resume downloaded!');
  }

  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            {/* <img src={job.imageUrl} className="card-img-top" alt="Job" /> */}
            <div className="card-body">
              <h5 className="card-title">{job.title}</h5>
              <p className="card-text">{job.description}</p>
              <p className="card-text">
                <strong>Requirements:</strong>
                {splitRequirements.map((requirement, index) => (
                  <span key={index}>
                    <br />
                    <span style={{ fontWeight: 'bold' }}>
                      {index === 0 ? 'I. ' : `II. `}
                    </span>
                    {requirement}.
                  </span>
                ))}
              </p>
              <p className="card-text"><strong>Location:</strong> {job.location}</p>
              <br />
              <h5 className="card-subtitle mb-3"><i>Applicants:</i></h5>
              <ul className="list-group">
                {job.applicants.map(applicant => (
                  <li key={applicant.applicant_id} className="list-group-item">
                    <div>
                      <h6>Name: </h6> <p> {applicant.applicant_name}</p>
                      <h6>Email: </h6> <p> {applicant.applicant_email}</p>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <button onClick={() => handleClick()} className="btn btn-primary btn-sm me-2">
                        Edit Application.
                      </button>
                      <button onClick={() => handleClick()} className="btn btn-primary btn-sm me-2">
                        Download Resume
                      </button>
                      <button onClick={() => handleClick()} className="btn btn-warning btn-sm me-2">
                        Delete Application.
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-primary me-2" onClick={() => handleClick()}> Apply </button>
            <button className="btn btn-danger me-2" onClick={() => handleClick()}> Delete Job </button>
            <button className="btn btn-primary" onClick={() => setCurrJob(null)}> Back </button>
    </div>
    </>
  );
}

export default JobDetails;
