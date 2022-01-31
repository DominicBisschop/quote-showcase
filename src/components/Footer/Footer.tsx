import React, {FC} from "react";
import {createStyles, makeStyles} from "@mui/styles";
import {Theme, Typography} from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            marginTop: "3em",
            padding: "1em",
            backgroundColor: theme.palette.primary.main,
            bottom: 0,
            left: 0,
            width: "100%",
            color: theme.palette.common.white,
            textAlign: "center"
        }
    })
);

export const Footer: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Typography>
                &copy; Copyright - Dominic Bisschop
            </Typography>
        </div>
    )
}