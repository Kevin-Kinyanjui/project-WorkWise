import React from 'react';

function JobCard({ job, setCurrJob }) {

  function handleClick(id) {
    setCurrJob(id);
  }

    return (
    <div className="col-md-4 mb-4" onClick={() => handleClick(job.id)}>
      <div className="card h-100 d-flex flex-column">
        { job.imageUrl && <img src={job.imageUrl} className="card-img-top" alt="Job" />}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{job.title}</h5>
          <p className="card-text flex-grow-1">{job.description}</p>
          {job.location && <p className="card-text"><strong>Location:</strong> {job.location}</p>}
        </div>
      </div>
    </div>
    );
};

export default JobCard; 