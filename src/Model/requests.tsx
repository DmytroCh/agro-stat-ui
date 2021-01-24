import axios from 'axios'
import { responseToChartData } from './dataForCharts';
import { Crop, DataLine } from './types'

const SERVER_URL = 'http://localhost:8080'

export async function getChartData(crop: Crop): Promise<Array<DataLine>> {
    try{
        const response = await axios.get(`${SERVER_URL}/prices`, {
            params: {
                crop: crop
            }
        });
        return responseToChartData(response.data);
    }catch(e){
        console.log(e);
        throw Error("Something went wrong with request for data.");
    }
}