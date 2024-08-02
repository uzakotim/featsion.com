import React, { useState } from "react";
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

function App() {
    const { t, i18n } = useTranslation();
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
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
            <main className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-4xl font-bold">{t("welcome")}</h1>
                <h2 className="text-2xl font-semibold">
                    {t("maintenance")}
                </h2>
            </main>
        </ThemeProvider>
    );
}

export default App;
