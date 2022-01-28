import {FC} from "react";
import {Divider, Theme} from "@mui/material";
import React from "react";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        customDivider: {
            marginTop: "1em",
            borderColor: theme.palette.common.white,
        }
    })
);

export const CustomDivider: FC = () => {
    const classes = useStyles();

    return (
        <Divider
            className={classes.customDivider}
            variant="inset"
        />
    )
}