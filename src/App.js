import React, { useState, useEffect } from "react";
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
function App() {
    const { t, i18n } = useTranslation();
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [isSmallScreen, setIsSmallScreen] = useState(false);

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
                    onClick={() => changeLanguage("ru")}
                    style={{ marginRight: "8px" }}
                >
                    <RU style={{ width: "24px", height: "16px" }} />
                </Button>
                <Button
                    onClick={() => changeLanguage("en")}
                    style={{ marginRight: "8px" }}
                >
                    <GB style={{ width: "24px", height: "16px" }} />
                </Button>
                <ThemeSwitcher toggleTheme={toggleTheme} />
            </header>
            {/* Welcome */}
            <main className="flex flex-col items-center justify-center h-[50vh] text-center">
                <h1 className="text-4xl font-bold">{t("welcome")}</h1>
                <h2 className="text-2xl font-semibold">
                    {t("maintenance")}
                </h2>
            </main>
            {/* Card */}
            <div className="w-[80vw] mx-auto flex justify-center items-center">
                {isSmallScreen ? (
                    <SmallCard
                        imageSrc="./IMG_0677.JPG"
                        title={t("Step1Title")}
                        text={t("Step1Text")}
                    />
                ) : (
                    <LeftLargeCard
                        imageSrc="./IMG_0677.JPG"
                        title={t("Step1Title")}
                        text={t("Step1Text")}
                    />
                )}
            </div>
            {/* Spacer */}
            <div className="mx-auto flex justify-center h-40 items-center"></div>
            {/* Card */}
            <div className="w-[80vw] mx-auto flex justify-center items-center">
                {isSmallScreen ? (
                    <SmallCard
                        imageSrc="./IMG_0677.JPG"
                        title={t("Step2Title")}
                        text={t("Step2Text")}
                    />
                ) : (
                    <RightLargeCard
                        imageSrc="./IMG_0677.JPG"
                        title={t("Step2Title")}
                        text={t("Step2Text")}
                    />
                )}
            </div>
            {/* Spacer */}
            <div className="mx-auto flex justify-center h-40 items-center"></div>
        </ThemeProvider>
    );
}

export default App;
