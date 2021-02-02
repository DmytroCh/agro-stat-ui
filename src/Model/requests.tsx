import axios from 'axios'
import { responseToChartData } from './dataForCharts';
import { Crop, DataLine } from './types'

declare global {
    interface Window {
        _env_:any;
    }
}

const env = window._env_;
const SERVER_URL = env ? env.API_URL : "http://localhost:3003"


export async function getChartData(crop: Crop): Promise<Array<DataLine>> {
    console.log("This is window._env_", SERVER_URL)
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