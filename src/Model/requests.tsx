import axios from 'axios'
import { currencyToChartData, responseToChartData } from './dataForCharts';
import { Crop, Currency, DataLine, Range } from './types'

const SERVER_URL = 'http://vmi473672.contaboserver.net:8080'
const BANK_SERVER_URL = 'https://bank.gov.ua'

export async function getChartData(crop: Crop, range: Range): Promise<DataLine[]> {
    try{
        const response = await axios.get(`${SERVER_URL}/prices`, {
            params: {
                crop: crop,
                start: range.start.toISOString().split('T')[0],
                end: range.end.toISOString().split('T')[0]
            }
        });
        return responseToChartData(response.data);
    }catch(e){
        console.error(e);
        throw Error("Something went wrong with request for data.");
    }
}

export async function getExchangeRate(response: DataLine[], currency: Currency): Promise<DataLine[]> {
    // API docs: https://bank.gov.ua/ua/open-data/api-dev
    // There is no option to reqest exchange rate for multiple dates
    
    const promises = response.map(async data => {
        try{
            const res = await axios.get(`${BANK_SERVER_URL}/NBUStatService/v1/statdirectory/exchange?json`, {
                params: {
                    valcode: currency,
                    date: data.date.replaceAll('-','')
                }
            });
            return currencyToChartData(res.data, data);
        }catch(e){
            console.error(e);
            throw Error("Something went wrong with request for exchange rate.");
        }
    });
    const result = await Promise.all(promises);
    return result;
        
}
