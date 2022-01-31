import {FC, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Button, Icon, IconButton, Tooltip, Typography} from "@mui/material";
import {CustomDivider} from "../../components/CustomDivider";
import {QuoteSlider} from "../../components/QuoteSlider";
import {PageBlock} from "../../components/PageBlock";
import * as React from "react";
import {TQuoteItem} from "../../components/QuoteItem";
import {getRandomQuotes} from "../../api/appActions";
import {isMobile} from "react-device-detect";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        mobileButton: {
            width: "fit-content"
        }
    })
);

export const RandomQuotesBlock: FC = () => {
    const classes = useStyles();

    const [randomQuotes, setRandomQuotes] = useState<TQuoteItem[]>([]);

    const fetchRandomQuotes = async () => {
        const quotes = await getRandomQuotes();
        setRandomQuotes(quotes as TQuoteItem[]);
    }

    useEffect(() => {
        fetchRandomQuotes();
    }, []);

    return (
        <PageBlock>
            {isMobile ? (
                <Box
                    my={1}
                    display="flex"
                    textAlign="center"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography mb={2} variant="h5">
                        Here are 5 random quotes!
                    </Typography>
                    <Button
                        className={classes.mobileButton}
                        color="secondary"
                        onClick={fetchRandomQuotes}
                        variant="contained"
                        startIcon={
                            <Icon color="primary">
                                autorenew
                            </Icon>
                        }
                    >
                        Get new quotes!
                    </Button>
                </Box>
            ) : (
                <Box
                    mx={3}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Typography variant="h4">
                        Here are 5 random quotes!
                    </Typography>
                    <Tooltip title="Get 5 new random quotes!" placement="top">
                        <IconButton color="secondary" onClick={fetchRandomQuotes}>
                            <Icon>autorenew</Icon>
                        </IconButton>
                    </Tooltip>
                </Box>
            )}
            <CustomDivider/>
            <QuoteSlider quoteItems={randomQuotes}/>
        </PageBlock>
    )
}