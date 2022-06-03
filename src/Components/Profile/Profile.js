import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import "./Profile.css";

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch("http://refertest.pythonanywhere.com/user/data", {
            method: "GET",
            uid: 136,
        })
            .then((res) => res.json())
            .then(({ data }) => {
                setProfile(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading></Loading>;
    }

    console.log(profile);

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
