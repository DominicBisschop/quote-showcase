import * as React from 'react';
import Container from '@mui/material/Container';
import {Typography} from "@mui/material";
import {ScrollToTop} from "./components/ScrollToTop";
import {NavigationBar} from "./components/NavigationBar";
import {RandomQuoteBlock} from "./sections/RandomQuoteBlock";
import {PopularQuotesBlock} from "./sections/PopularQuotesBlock";
import {RandomQuotesBlock} from "./sections/RandomQuotesBlock";
import {Footer} from "./components/Footer";

export default function App() {
    return (
        <>
            <NavigationBar/>
            <Container>
                <Typography my={3} variant="h3" textAlign="center">
                    Quote showcase
                </Typography>
                <RandomQuoteBlock/>
                <PopularQuotesBlock/>
                <RandomQuotesBlock/>
            </Container>
            <Footer/>
            <ScrollToTop/>
        </>
    );
}


