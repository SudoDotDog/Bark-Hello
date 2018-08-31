export interface ICard {
    name: string;
    url: string;
}

export interface IRow {
    cards: ICard[]
}

export interface IPage {
    rows: IRow[]
}