export interface ICard {
    name: string;
    url: string;
}

export interface IRow {
    name: string;
    cards: ICard[]
}

export interface IPage {
    rows: IRow[]
}