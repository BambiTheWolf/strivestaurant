export interface Dish {
    id: number
    name: string
    image: string
    category: string
    label: string
    price: string
    description: string
}

export interface Comments extends Dish {
    id: number
    rating: number
    comment: string
    author: string
    date: string
}