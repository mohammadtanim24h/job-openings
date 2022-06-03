import React, { useEffect, useState } from "react";
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
            <h2>Job Openings</h2>
        </div>
    );
};

export default JobOpenings;
