import React, {FC} from "react";
import {Carousel} from "react-material-ui-carousel/dist/components/Carousel";
import {QuoteItem} from "../QuoteItem";
import {TQuoteSliderProps} from "./types";

export const QuoteSlider: FC<TQuoteSliderProps> = ({quoteItems}) => {
    return (
        <Carousel>
            {
                quoteItems.map((quoteItem, index) => {
                    return (
                        <QuoteItem key={index} quoteItem={quoteItem}/>
                    )
                })
            }
        </Carousel>
    )
}