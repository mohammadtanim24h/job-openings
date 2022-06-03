import React, { useEffect, useState } from "react";
import JobOpening from "../JobOpening/JobOpening";
import "./JobOpenings.css";

const JobOpenings = () => {
    const [jobOpenings, setJobOpenings] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch("http://refertest.pythonanywhere.com/job/openings", {
            method: "GET",
            tid: 3441,
        })
            .then((res) => res.json())
            .then(({ data }) => {
                setJobOpenings(data);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h2 className="text-center text-secondary mb-3">Openings</h2>
            <div className="row g-5">
                {jobOpenings.map((opening) => (
                    <JobOpening key={opening.id} opening={opening}></JobOpening>
                ))}
            </div>
        </div>
    );
};

export default JobOpenings;
