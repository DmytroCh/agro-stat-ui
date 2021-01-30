import { DataLine, Price } from "./types";

export const responseToChartData = (response: Array<Price>): Array<DataLine> => {
    const result = [] as Array<DataLine>;
    for(let i = 0; i < response.length; i++){
        result.push({
            date: response[i].date.toString().slice(0, 10).replace(/(\d{4})\/(\d{2})\/(\d{2})/, "$3/$2/$1"),
            price: response[i].price
        });
    }
    return result;
};