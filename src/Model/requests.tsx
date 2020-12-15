import axios from 'axios'
import { Crops, DataLine } from './types'

const SERVER_URL = ''

export function getChartData(crop: Crops): Array<DataLine> {
    /*axios.get(`${SERVER_URL}/crop`, {
        params: {
            crop: crop
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })*/
    return [
        {
            "date": "10-12-2014",
            "price": 2100
        },
        {
            "date": "10-12-2015",
            "price": 2000
        },
        {
            "date": "10-12-2016",
            "price": 1700
        },
        {
            "date": "10-12-2017",
            "price": 2100
        },
        {
            "date": "10-12-2018",
            "price": 2500
        },
        {
            "date": "10-12-2019",
            "price": 2650
        },
        {
            "date": "10-12-2020",
            "price": 2400
        }
    ]
}