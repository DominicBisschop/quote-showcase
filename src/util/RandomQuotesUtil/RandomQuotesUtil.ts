import {TQuoteItem} from "../../components/QuoteItem";

export const getRandomQuotesFromFullList = (quotesList: TQuoteItem[]) => {
    const randomQuotesList: TQuoteItem[] =  [];
    const randomNumbers: number[] = [];
    let index: number = 0;

    do {
        // Generate a random number between 1 and 5
        const randomNumber = Math.floor(Math.random() * 5 + 1);

        // Check if we allready used the specific random number
        const foundNumber = randomNumbers.find(r => r === randomNumber);

        // Check if we didn't find the number and push the quote with the index of the random number
        if (foundNumber === undefined) {
            randomNumbers.push(randomNumber);
            randomQuotesList.push(quotesList[randomNumber]);
            index++;
        }
    } while (index < 5);

    return randomQuotesList;
}