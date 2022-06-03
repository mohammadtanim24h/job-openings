import React from "react";

const JobOpening = ({ opening }) => {
    const { company, designation, location, min_experience, skills } = opening;
    return (
        <div className="col-lg-6 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h4>{designation}</h4>
                    <h5 className="text-secondary">{company}</h5>
                    <p className="card-text mb-0">{location}</p>
                    <p className="mb-0">
                        {min_experience === 0
                            ? "Fresher Opening"
                            : min_experience + " year"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JobOpening;
