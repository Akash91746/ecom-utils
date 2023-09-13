import { Box } from "@mui/material";
import React from "react";

const SpaceBetweenBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Box display='flex' justifyContent='space-between'>
        {children}
    </Box>
}

export default SpaceBetweenBox;