export enum Crops {
    Wheat2 = "wheat2",
    Wheat3 = "wheat3",
    Wheat4 = "wheat4",
    Sunflowers = "sunflowers"
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
    crop: Crops
}
