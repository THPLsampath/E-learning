import React from 'react'
import { useParams } from 'react-router-dom';

export default function CartScreen(props) {
    const { id } = useParams();
    const qty = props.location.serch?Number( props.location.serch.split('=')[1]): 1;
  return (
    <div>
        <h1>Cart Screen </h1>
        <p>Add to cart handalar productId: {id} Qty: {qty}</p>
    </div>
  )
}
