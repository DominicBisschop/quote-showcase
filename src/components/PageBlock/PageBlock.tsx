import React, {FC} from "react";
import {Box, Theme} from "@mui/material";
import { makeStyles, createStyles } from '@mui/styles';
import {TPageBlockProps} from "./types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        customPageBlock: {
            marginBottom: "1em",
            backgroundColor: theme.palette.primary.main,
            borderRadius: "5px",
            color: theme.palette.common.white,
            height: "fit-content"
        }
    })
);

export const PageBlock: FC<TPageBlockProps> = ({children}) => {
    const classes = useStyles();

    return (
        <Box
            className={classes.customPageBlock}
            width={1}
            p={3}
        >
            {children}
        </Box>
    )
}