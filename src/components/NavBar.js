import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import theme from "../theme";

const NavBar = () => {
    return (
        <Box theme={theme} sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <HomeIcon color="secondary" />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, mx: "auto", width: 200 }}
                    >
                        Cornell Note Taking
                    </Typography>
                    <Button color="secondary">Sign Up</Button>
                    <Button color="secondary">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
