import React, { useEffect, useState } from "react";
import "./Profile.css";
import { AiFillEdit } from "react-icons/ai";

const Profile = () => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        fetch("http://refertest.pythonanywhere.com/user/data", {
            method: "GET",
            uid: 136,
        })
            .then((res) => res.json())
            .then(({ data }) => {
                setProfile(data);
            });
    }, []);
    return (
        <div className="profile">
            <div className="text-center">
                <img src={profile?.pictureUrl} alt="" />
            </div>
            <div className="text-center">
                <h4 className="name">{profile?.name}</h4>
                <p className="college">College: {profile?.college}</p>
                <button className="btn btn-primary w-100 mt-2">
                    Update Profile <AiFillEdit className="mb-1"></AiFillEdit>
                </button>
            </div>
        </div>
    );
};

export default Profile;
