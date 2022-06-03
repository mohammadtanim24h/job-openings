import React from "react";
import JobOpenings from "../../Components/JobOpenings/JobOpenings";
import Profile from "../../Components/Profile/Profile";
import "./Home.css";

const Home = () => {
    return (
        <div className="openings">
            <h2 className="text-center mt-3 title">Job Openings</h2>
            <div className="row g-5 mt-1">
                <div className="col col-lg-8 job-openings">
                    <JobOpenings></JobOpenings>
                </div>
                <div className="col col-lg-4 d-flex justify-content-center h-50 applicant-profile">
                    <Profile></Profile>
                </div>
            </div>
        </div>
    );
};

export default Home;
