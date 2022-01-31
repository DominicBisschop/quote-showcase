import {Box, Link, Theme, Typography} from "@mui/material";
import React, {FC} from "react";
import {TQuoteItemProps} from "./types";
import {createStyles, makeStyles} from "@mui/styles";
import {theme} from "../../styles/theme";
import {FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton} from "react-share";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        quoteItemBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2em",
        },
        quoteText: {
            fontFamily: "Jacques Francois, serif",
            fontSize: "1.5em",
            fontStyle: "italic",
            textAlign: "center",
            padding: "1em 0 3em 0",
            width: "60%",
            marginBottom: "3em",
            [theme.breakpoints.down('lg')]: {
                width: "75%"
            },
            [theme.breakpoints.down('md')]: {
                width: "90"
            },
            [theme.breakpoints.down('sm')]: {
                width: "100%"
            },
        },
        quoteAuthor: {
            color: theme.palette.secondary.main,
            textAlign: "right",
            width: "100%",
            [theme.breakpoints.down('sm')]: {
                width: "100%"
            },
        },
        quotePermalink: {
            textAlign: "right",
            width: "100%",
            [theme.breakpoints.down('sm')]: {
                width: "100%"
            },
        },
        quoteBox: {
            width: "60%",
            [theme.breakpoints.down('lg')]: {
                width: "75%"
            },
            [theme.breakpoints.down('md')]: {
                width: "90"
            },
            [theme.breakpoints.down('sm')]: {
                width: "100%"
            },
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
            <Box
                className={classes.quoteBox}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <FacebookShareButton
                        quote={quoteItem.quote + ' - ' + quoteItem.author}
                        children={
                            <FacebookIcon
                                size={40}
                                round={true}
                            />
                        }
                        url={`http://quotes.stormconsultancy.co.uk/quotes/${quoteItem.id}`}
                    />
                    <TwitterShareButton
                        children={
                            <TwitterIcon
                                size={40}
                                round={true}
                            />
                        }
                        title={quoteItem.quote + ' - ' + quoteItem.author}
                        url={`http://quotes.stormconsultancy.co.uk/quotes/${quoteItem.id}`}
                    />
                </Box>
                <Box
                    width={1}
                    display="flex"
                    textAlign="right"
                    flexDirection="column"
                >
                    <Typography className={classes.quoteAuthor}>
                        - {quoteItem.author}
                    </Typography>
                    <Link
                        color={theme.palette.common.white}
                        href={`http://quotes.stormconsultancy.co.uk/quotes/${quoteItem.id}`}
                        className={classes.quotePermalink}
                        target="_blank"
                        rel="noreferrer"
                        variant="caption"
                    >
                        Permalink
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}