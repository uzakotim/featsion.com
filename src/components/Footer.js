import React from "react";
const Footer = () => {
    return (
        <footer
        style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "1rem",
            alignItems: "center",
            backgroundColor: "#020421", // Dark blue color
            color: "#ffffff", // Optional: Sets text color to white for better contrast
        }}
    ><div className="w-full flex justify-center items-center">
            <div className="mx-auto flex-row justify-center items-center">
                <div className="flex justify-center items-center">
                <img src="/logo.svg" alt="Featsion Robotics Logo" style={{ width: "40px", height: "40x", color: "white" }} />
                </div>
                <div className="mx-auto flex justify-center h-1 items-center"></div>
                <p>Featsion Robotics &copy; 2024. All rights reserved.</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
