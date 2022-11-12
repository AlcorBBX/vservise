export interface IAvia {
    from: string
    to: string
    there: string
    back: string
}

export interface IAviaInfo {
    name: string
    cost: string
    time: time[]
}

type time = {
    time: string
    t: string
}