import React from "react";
import JobOpenings from "../../Components/JobOpenings/JobOpenings";
import Profile from "../../Components/Profile/Profile";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
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
