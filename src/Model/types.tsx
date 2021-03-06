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
    UAH = "UAH",
    USD = "USD"
}

export type CurrencyResponseItem = {
    cc: string,
    exchangedate: string,
    r030: number,
    rate: number,
    txt: string
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

export type Seria = {
    name: Currency,
    data: DataLine[]
}

export type CustomSeria = {
    name: string,
    data: DataLine[]
}

export type WindowSize = {
    width: number,
    height: number
}

export type Range = {
    start: Date,
    end: Date
}

export type ChartData = {
    windowSize: WindowSize,
    cropName?: Crop,
    range: Range,
    series: Seria[],
    updateCrop?: (crop: Crop) => void
}

export enum SupportedLanguages {
    en = "gb",
    ua = "ua",
    ru = "ru",
    pl = "pl"
}
