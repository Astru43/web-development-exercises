// Just a type declaration file.

declare namespace Item {
    interface Item {
        item: null | string | number
        seller: null | string | number
        description: null | string
        category: null | string[]
        price: null | {
            integer: number,
            decimal: number
        }
        shipping: null | {
            integer: number,
            decimal: number
        }
        rating: null | number
        img: null | string
        uuid?: null | string
    }
}

