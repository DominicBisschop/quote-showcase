import React, {FC} from "react";
import {Box, Divider} from "@mui/material";
import {theme} from "../../styles/theme";

export const CustomDivider: FC = () => {
    return (
        <Box my={3}>
            <Divider
                variant="middle"
                color={theme.palette.common.white}
            />
        </Box>
    )
}