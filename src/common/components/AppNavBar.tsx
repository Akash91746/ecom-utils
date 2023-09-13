import { AppBar, AppBarProps, Toolbar, Typography } from "@mui/material";
import React from "react";
import StringResources from "../utils/StringResources";
import { Link } from "react-router-dom";
import Screens from "../utils/Screen";

const AppNavBar: React.FC<AppBarProps> = (props) => {
    return <AppBar {...props} component={'header'}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link to={Screens.Home}>
                <Typography>
                    {StringResources.APP_NAME}
                </Typography>
            </Link>
        </Toolbar>
    </AppBar>
}

export default AppNavBar;