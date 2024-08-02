import React from "react";
import { Button } from "@mui/material";
import Flag from "react-flags"; // Default export from react-flags
import { FormControlLabel, Switch } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function Header({ changeLanguage, theme, toggleTheme }) {
    return (
        <header
            style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "1rem",
                alignItems: "center",
            }}
        >
            <Button
                onClick={() => changeLanguage("ru")}
                style={{ marginRight: "8px" }}
            >
                <Flag name="RU" format="png" pngClassName="flag-icon" />
            </Button>
            <Button
                onClick={() => changeLanguage("en")}
                style={{ marginRight: "8px" }}
            >
                <Flag name="GB" format="png" pngClassName="flag-icon" />
            </Button>
            <FormControlLabel
                control={
                    <Switch
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />
                }
                label={
                    theme === "dark" ? <Brightness4 /> : <Brightness7 />
                }
            />
        </header>
    );
}

export default Header;
