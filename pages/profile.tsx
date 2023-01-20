import React from "react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader"


const Profile: NextPage = () => {
  return (
    <div >
       <Navbar/>
    <ProfileHeader/>
    </div>
  );
};

export default Profile;