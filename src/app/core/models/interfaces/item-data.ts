export interface ItemData {
    author: string
    num_comments: number
    points: number
    story_id: number
    title: string
    url: string
    text: string
    children?: ItemData[]
}