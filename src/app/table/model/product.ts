import { Order } from "./order";

export interface Product {
    code: number,
    name: string,
    category: string,
    quantity: number,
    orders: Order[]
}