import { CurrencyResponseItem, DataLine, Price } from "./types";

export const responseToChartData = (response: Price[]): DataLine[] => {
    const result: DataLine[] = [];
    for(let i = 0; i < response.length; i++){
        result.push({
            date: response[i].date.toString().slice(0, 10).replace(/(\d{4})\/(\d{2})\/(\d{2})/, "$3/$2/$1"),
            price: response[i].price
        });
    }
    return result;
};

export const currencyToChartData = (currencyResponse: CurrencyResponseItem[], priceResponse: DataLine): DataLine => {
    const usdPrice = Math.round(priceResponse.price * 100 / currencyResponse[0].rate) / 100;
    return {
        date: priceResponse.date,
        price: usdPrice
    };
};
