import { ItemData } from "./item-data"

export interface NewsData {
    hitsPerPage: number
    nbHits: number
    nbPages: number
    page: number
    hits: ItemData[]
}
