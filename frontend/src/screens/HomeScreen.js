import React, { useEffect } from 'react'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {useSelector} from 'react-redux'
import { listProducts } from '../actions/productAction';
import { useDispatch } from 'react-redux';

export default function HomeScreen() {

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList;
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
      ) : (
      <div className="row center">
      {
          products.map(product=>(
              <Product product={product} />
          ))
      }
      </div>
      )
      }
    </div>
  )
}
