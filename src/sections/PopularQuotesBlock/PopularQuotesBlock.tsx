import {FC, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {CustomDivider} from "../../components/CustomDivider";
import {QuoteSlider} from "../../components/QuoteSlider";
import {PageBlock} from "../../components/PageBlock";
import * as React from "react";
import {TQuoteItem} from "../../components/QuoteItem";
import {getPopularQuotes} from "../../api/appActions";

export const PopularQuotesBlock: FC = () => {
    const [popularQuotes, setPopularQuotes] = useState<TQuoteItem[]>([]);

    const fetchPopularQuotes = async () => {
        const quotes = await getPopularQuotes();
        setPopularQuotes(quotes as TQuoteItem[]);
    }

    useEffect(() => {
        fetchPopularQuotes();
    }, []);

    return (
        <PageBlock>
            <Box
                mx={3}
            >
                <Typography variant="h4">
                    Here are the top 5 quotes!
                </Typography>
            </Box>
            <CustomDivider/>
            <QuoteSlider quoteItems={popularQuotes}/>
        </PageBlock>
    )
}