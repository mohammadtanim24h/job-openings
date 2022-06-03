import React, { useEffect, useState } from "react";
import "./Profile.css";

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
            </div>
        </div>
    );
};

export default Profile;
