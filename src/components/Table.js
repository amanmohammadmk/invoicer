import React from 'react'

export default function Table({ list, total }) {
    return (
        <>
            <table className='table' width="100%">
                <thead>
                    <tr className='bg-gray-200 p-1 '>
                        <th className='font-bold '>Item description</th>
                        <th className='font-bold '>Quantity</th>
                        <th className='font-bold '>Price</th>
                        <th className='font-bold '>Amount</th>

                    </tr>
                </thead>

                {
                    list.map(({ id, description, quantity, price, amount }) => (
                        <React.Fragment key={id}>
                            <tbody>
                                <tr className='text-center'>
                                    <td>{description}</td>
                                    <td>{quantity}</td>
                                    <td>{price}</td>
                                    <td>{amount}</td>

                                </tr>
                            </tbody>

                        </React.Fragment>
                    ))}

            </table>
            <div>
                <h2>Total:{total}</h2>
            </div>
        </>
    )
}
