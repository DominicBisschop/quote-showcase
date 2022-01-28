import * as React from 'react';
import {useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {AppBar, Icon, IconButton, Toolbar, Tooltip, Typography} from "@mui/material";
import {QuoteSlider} from "./components/QuoteSlider";
import {QuoteItem, TQuoteItem} from "./components/QuoteItem";
import {PageBlock} from "./components/PageBlock";
import {getPopularQuotes, getRandomQuote} from "./api/appActions";
import {CustomDivider} from "./components/CustomDivider";

export default function App() {
    const [randomQuote, setRandomQuote] = useState<TQuoteItem>({
        id: 0,
        quote: "",
        author: "",
    });
    const [popularQuotes, setPopularQuotes] = useState<TQuoteItem[]>([]);

    const fetchRandomQuote = async () => {
        const quote = await getRandomQuote();
        setRandomQuote(quote as TQuoteItem);
    }

    const fetchPopularQuotes = async () => {
        const quotes = await getPopularQuotes();
        setPopularQuotes(quotes as TQuoteItem[]);
    }

    useEffect(() => {
        fetchRandomQuote();
        fetchPopularQuotes();
    }, []);

    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar disableGutters>
                        <img
                            style={{maxWidth: "10vw"}}
                            src="images/kabisa-logo-light.svg"
                            className="App-logo"
                            alt="logo"
                        />
                    </Toolbar>
                </Container>
            </AppBar>
            <Box width={1}>
                <Container>
                    <Typography my={3} variant="h3" textAlign="center">
                        Quote showcase
                    </Typography>
                    <PageBlock>
                        <Box
                            width={1}
                            display="flex"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography variant="h4" textAlign="center">
                                Enjoy a random quote!
                            </Typography>
                            <Tooltip title="Get new random quote" placement="top">
                                <IconButton color="secondary" onClick={fetchRandomQuote}>
                                    <Icon >autorenew</Icon>
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <CustomDivider/>
                        <QuoteItem quoteItem={randomQuote}/>
                    </PageBlock>
                    <PageBlock>
                        <Box
                            width={1}
                        >

                        </Box>
                        <Typography variant="h4" textAlign="center">
                            Here are the top 5 quotes!
                        </Typography>
                        <CustomDivider/>
                        <QuoteSlider quoteItems={popularQuotes}/>
                    </PageBlock>
                </Container>
            </Box>
        </>
    );
}


