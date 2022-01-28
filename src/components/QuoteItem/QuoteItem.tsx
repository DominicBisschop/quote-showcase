import {Box, Theme, Typography} from "@mui/material";
import React, {FC} from "react";
import {TQuoteItemProps} from "./types";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        quoteItemBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        quoteText: {
            fontFamily: "Jacques Francois, serif",
            fontSize: "1.5em",
            textAlign: "center",
            padding: "1em 0",
            width: "50%"
        },
        quoteAuthor: {
            color: theme.palette.grey.A200,
            textAlign: "right",
            width: "50%"
        }
    })
);

export const QuoteItem: FC<TQuoteItemProps> = ({quoteItem}) => {
    const classes = useStyles();

    return (
        <Box
            className={classes.quoteItemBox}
        >
            <Typography className={classes.quoteText}>
                "{quoteItem.quote}"
            </Typography>
            <Typography className={classes.quoteAuthor}>
                - {quoteItem.author}
            </Typography>
        </Box>
    )
}