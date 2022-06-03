import React, { useEffect, useState } from "react";

const Profile = () => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        fetch("http://refertest.pythonanywhere.com/user/data", {
            method: "GET",
            uid: 136,
        })
            .then((res) => res.json())
            .then((data) => setProfile(data));
    }, []);
    
    return (
        <div>
            <h3>Profile</h3>
        </div>
    );
};

export default Profile;
