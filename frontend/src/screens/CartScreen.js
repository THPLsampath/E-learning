import React from 'react'
import { useParams } from 'react-router-dom';


export default function CartScreen(props) {
    const  {id, qty}  = useParams();
    console.log(id)
    console.log(qty)
  return (
    <div>
        <h1>Cart Screen </h1>
        <p>Add to cart handalar productId: {id} Qty: {qty}</p>
    </div>
  )
}
