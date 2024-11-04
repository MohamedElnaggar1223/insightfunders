// Xyz.js
"use client"; // Mark this as a client component

import { useEffect, useState } from "react";
import StartupSideBar from "./StartupSideBar";

export default function StartupSideBarMenu() {
    const [userPreference, setUserPreference] = useState("");

    useEffect(() => {
        // Access localStorage and set the state
        const preference = localStorage.getItem("hamburgerState") || "";
        setUserPreference(preference);
    }, []);

    return <StartupSideBar  userPreference={userPreference} />;
}
