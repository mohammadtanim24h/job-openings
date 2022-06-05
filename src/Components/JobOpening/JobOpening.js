import React from "react";
import "./JobOpening.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const JobOpening = ({ opening }) => {
    const { company, designation, location, min_experience, skills } = opening;
    return (
        <div className="col-lg-6 d-flex justify-content-center">
            <div className="card opening-card">
                <div className="card-body">
                    <h4>{designation}</h4>
                    <h5 className="text-secondary">{company}</h5>
                    <p className="card-text mb-0">
                        <FaMapMarkerAlt className="mb-1 me-1"></FaMapMarkerAlt>
                        {location}
                    </p>
                    <p className="mb-0">
                        {min_experience === 0
                            ? "Fresher Opening"
                            : "Minimum Experience: " + min_experience + " year"}
                    </p>
                    <p>
                        <span className="fw-bold">Skills Required:</span>{" "}
                        {skills.join(", ")}
                    </p>
                    <div>
                        <button className="btn btn-primary mb-0">
                            Apply{" "}
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM10.692 8.586L6.228 13.05L4.959 11.781L9.423 7.317L7.506 5.4L12.591 5.409L12.6 10.494L10.692 8.586Z"
                                    fill="white"
                                ></path>
                            </svg>
                        </button>
                        <button className="btn btn-primary mb-0 ms-2">
                            Save{" "}
                            <AiOutlineHeart></AiOutlineHeart>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobOpening;
