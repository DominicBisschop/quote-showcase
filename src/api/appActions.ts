import axios from "axios";
import {TQuoteItem} from "../components/QuoteItem";
import {getRandomQuotesFromFullList} from "../util/RandomQuotesUtil";

export const getRandomQuote = async (): Promise<TQuoteItem> => {
    const response = await axios.get<TQuoteItem>(
        `http://quotes.stormconsultancy.co.uk/random.json`,
    );

    return response.data;
}

export const getPopularQuotes = async (): Promise<TQuoteItem[]> => {
    const response = await axios.get<TQuoteItem[]>(
        `http://quotes.stormconsultancy.co.uk/popular.json`,
    );

    return response.data.slice(0, 5);
}

export const getRandomQuotes = async (): Promise<TQuoteItem[]> => {
    const response = await axios.get<TQuoteItem[]>(
        `http://quotes.stormconsultancy.co.uk/quotes.json`,
    );

    return getRandomQuotesFromFullList(response.data);
}