/**
 *                         id: '1000-0',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 65,
                        quantity: 1,
                        customer: 'David James',
                        status: 'PENDING'
 */
export interface Order {
    id: string,
    productCode: string,
    date: string,
    amount: number,
    quantity: number,
    customer: string,
    status: string
}