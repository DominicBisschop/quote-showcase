import axios from "axios";
import {TQuoteItem} from "../components/QuoteItem";

export const getRandomQuote = async (): Promise<TQuoteItem> => {
    const response = await axios.get<TQuoteItem>(
        `http://quotes.stormconsultancy.co.uk/random.json`,
    );

    console.log(response);
    return response.data;
}

export const getPopularQuotes = async (): Promise<TQuoteItem[]> => {
    const response = await axios.get<TQuoteItem[]>(
        `http://quotes.stormconsultancy.co.uk/popular.json`,
    );

    console.log(response);
    return response.data.slice(0, 5);
}