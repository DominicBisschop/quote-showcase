import * as React from "react";
import {FC, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Button, Icon, IconButton, Tooltip, Typography} from "@mui/material";
import {CustomDivider} from "../../components/CustomDivider";
import {QuoteItem, TQuoteItem} from "../../components/QuoteItem";
import {PageBlock} from "../../components/PageBlock";
import {getRandomQuote} from "../../api/appActions";
import {isMobile} from "react-device-detect";
import {createStyles, makeStyles} from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        mobileButton: {
            width: "fit-content"
        }
    })
);

export const RandomQuoteBlock: FC = () => {
    const classes = useStyles();

    const [randomQuote, setRandomQuote] = useState<TQuoteItem>({
        id: 0,
        quote: "",
        author: "",
    });

    const fetchRandomQuote = async () => {
        const quote = await getRandomQuote();
        setRandomQuote(quote as TQuoteItem);
    }

    useEffect(() => {
        fetchRandomQuote();
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
                        Enjoy a random quote!
                    </Typography>
                    <Button
                        className={classes.mobileButton}
                        color="secondary"
                        onClick={fetchRandomQuote}
                        variant="contained"
                        startIcon={
                            <Icon color="primary">
                                autorenew
                            </Icon>
                        }
                    >
                        Get a new quote!
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
                        Enjoy a random quote!
                    </Typography>
                    <Tooltip title="Get a new random quote!" placement="top">
                        <IconButton color="secondary" onClick={fetchRandomQuote}>
                            <Icon>autorenew</Icon>
                        </IconButton>
                    </Tooltip>
                </Box>
            )}
            <CustomDivider/>
            <QuoteItem quoteItem={randomQuote}/>
        </PageBlock>
    )
}