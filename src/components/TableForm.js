import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid"

export default function TableForm({ description, setDescription, quantity, setQuantity, amount, setAmount, price, setPrice, setList, list, total, setTotal }) {

  const [editing, setEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount

    }
    setDescription("")
    setQuantity("")
    setPrice("")
    setAmount("")
    setList([...list, newItems])
    setEditing(false)
    console.log(list);
  }


  // 

  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price)
    }
    calculateAmount(amount)

  }, [amount, price, quantity, setAmount])


  // total amount of item in table
  let rows = document.querySelectorAll(".amount");
  let sum = 0;
  
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].className === "amount") {
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
    }
  }
  
  setTotal(sum);


  // edit


  const edititem = (id) => {
    const editedValue = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id != id))
    setEditing(true)
    setDescription(editedValue.description)
    setQuantity(editedValue.quantity)
    setPrice(editedValue.price)
  }

  // delete

  const deleteitem = (id) => {
    setList(list.filter((row) => row.id !== id))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor="description">Item description</label>
          <input type="text" name='description' id='description' placeholder='Item description' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className='md:grid grid-cols-3 gap-10 '>
          <div className='flex flex-col'>
            <label htmlFor="quantity">Quantity</label>
            <input type="text" name='quantity' id='quantity' placeholder='Item quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="price">Price</label>
            <input type="text" name='price' id='price' placeholder='Item price' value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="price">Total</label>
            <p>{quantity * price}</p>
          </div>


        </div>
        <button className='mb-3 text-white bg-blue-500 py-2 px-8 rounded shodow border-2 border-blue-500 hover:bg-transparent hover:text-black transition-all duration-300' type='submit'>
          {editing ? "Edit" : "Add"}
        </button>
      </form>

      {/* list table items */}

      <table className='table' width="100%">
        <thead>
          <tr className='bg-gray-200 p-1 '>
            <th className='font-bold '>Item description</th>
            <th className='font-bold '>Quantity</th>
            <th className='font-bold '>Price</th>
            <th className='font-bold '>Amount</th>
            <th></th>
            <th></th>
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
                  <td className='amount'>{amount}</td>
                  <td >
                    <button onClick={() => deleteitem(id)}><i class="fa-solid fa-trash"></i></button>
                  </td>
                  <td >
                    <button onClick={() => edititem(id)}>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
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
