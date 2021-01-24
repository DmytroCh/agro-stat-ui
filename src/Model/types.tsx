export enum Crop {
    wheat2 = "wheat_2",
    wheat3 = "wheat_3",
    wheat4 = "wheat_4",
    sunflower = "sunflower",
    rye = "rye",
    corn = "corn",
    barley = "barley",
    soybean = "soybean",
    buckwheat = "buckwheat"
}

// In ISO3166 standard
export enum Country {
    UKR = "UKR"
}

// In ISO4217 standard
export enum Currency {
    UAH = "UAH"
}

export type Price = {
    cropName: Crop,
    country: Country,
    date: Date,
    price: number,
    currency: Currency
}

export type DataLine = {
    date: string,
    price: number
}

export type WindowSize = {
    width: number,
    height: number
}

export type ChartData = {
    windowSize: WindowSize
    crop: Crop
}
