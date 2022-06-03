import React from "react";
import JobOpenings from "../../Components/JobOpenings/JobOpenings";
import Profile from "../../Components/Profile/Profile";
import './Home.css';

const Home = () => {
    return (
        <div className="openings">
            <h2 className="text-center mt-3 title">Job Openings</h2>
            <div>
                <Profile></Profile>
            </div>
            <div>
                <JobOpenings></JobOpenings>
            </div>
        </div>
    );
};

export default Home;
