import React, { useState } from 'react';

function Apply({ jobId }) {
  const [coverLetter, setCoverLetter] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:9292/jobs/${jobId}/apply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cover_letter: coverLetter,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error('Error submitting job application:', error);
      });
  }

  return (
    <div>
      <br />
      <h3 className="text-center">Apply for the job</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            className="form-control"
            rows="4"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          ></textarea>
        </div>
        <br />
        <button type="submit" className="btn btn-primary btn-sm justify-content-end">
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default Apply;
