import React from 'react'
import '../App.css'

function About() {
  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">About Workwise Project</h1>
          <div className="card mb-4">
            <div className="card-body">
              <h3>What is Workwise?</h3>
              <p>
                Workwise is a platform designed to connect job seekers with employers and freelancers with clients.
                Our mission is to simplify the job search process and enable employers and clients to find the best talent for their projects.
              </p>
              <p>
                Whether you're a job seeker looking for your dream job or an employer seeking skilled professionals, Workwise
                is here to help you succeed in your career or business goals.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>How does it work?</h3>
              <p>
                Job seekers can create profiles, upload their resumes, and browse a wide range of job listings across various industries.
                They can easily apply for jobs that match their skills and experience, making the job search process efficient and streamlined.
              </p>
              <p>
                On the other hand, employers can post job openings, review applications, and search for the perfect candidates to fill their roles.
                Our platform provides advanced search and filtering options, ensuring that employers find the most suitable candidates for their job positions.
              </p>
              <p>
                Freelancers can create professional profiles showcasing their expertise and skills. They can search for freelance projects that match their skills
                and submit proposals to clients. Workwise facilitates secure communication and payment methods, making it a trusted platform for both freelancers and clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <h4>Contact Us</h4>
        <p>Email: info@workwise.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
    </>
  );
}

export default About