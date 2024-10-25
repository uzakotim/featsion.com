import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { GlobalStyles } from "./global";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "./i18n";
import { GB, RU } from "country-flag-icons/react/3x2";
import { Button } from "@mui/material";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";
import LeftLargeCard from "./components/LeftLargeCard";
import RightLargeCard from "./components/RightLargeCard";
import SmallCard from "./components/SmallCard";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
function App() {
    const { t, i18n } = useTranslation();
    const [theme, setTheme] = useState("light");
    const [isRussian, setIsRussian] = useState(
        i18n.language.startsWith("ru")
    );

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const changeLanguage = () => {
        const newLanguage = isRussian ? "en" : "ru";
        i18n.changeLanguage(newLanguage);
        setIsRussian(!isRussian);
    };
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const isDarkMode = useMediaQuery({ query: '(prefers-color-scheme: dark)' });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        setIsSmallScreen(mediaQuery.matches);

        const handleResize = () => {
            setIsSmallScreen(mediaQuery.matches);
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Helmet>
                <title>Featsion Robotics</title>
                <meta
                    name="description"
                    content="Instructions on how to make a personal DIY robot"
                />
                <meta property="og:title" content="Featsion Robotics" />
                <meta
                    property="og:description"
                    content="Instructions on how to make a personal DIY robot"
                />
            </Helmet>
            <header
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "1rem",
                    alignItems: "center",
                    backgroundColor: "#020421", // Dark blue color
                    color: "#ffffff", // Optional: Sets text color to white for better contrast
                }}
            >
                <Button
                    onClick={() => changeLanguage()}
                    style={{ marginRight: "8px" }}
                >
                    {isRussian ? (
                        <RU style={{ width: "24px", height: "16px" }} />
                    ) : (
                        <GB style={{ width: "24px", height: "16px" }} />
                    )}
                </Button>
                <ThemeSwitcher toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            </header>
            {/* Welcome */}
            <main className="flex flex-col items-center justify-center h-[25vh] text-center">
                <h1 className="text-4xl font-bold">{t("welcome")}</h1>
                <h2 className="text-2xl font-semibold">
                    {t("maintenance")}
                </h2>
            </main>
            {/* Card */}
            <div className="w-[90vw] mx-auto flex justify-center items-center">
                <ImageCard
                    imageSrc={
                        theme === "light"
                            ? "./step1.webp"
                            : "./step1_dark.webp"
                    }
                    title="Step 1"
                    text="Step 1 text"
                />
            </div>
            {/* Spacer */}
            <div className="mx-auto flex justify-center h-40 items-center"></div>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
