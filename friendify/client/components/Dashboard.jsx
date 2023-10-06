import React from "react";
import Navbar from "./Navbar";
import WelcomeUser from "./WelcomeUser";
import MainContent from "./MainContent";

const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <WelcomeUser/>
            <MainContent/>
        </div>
    );
};

export default Dashboard;
