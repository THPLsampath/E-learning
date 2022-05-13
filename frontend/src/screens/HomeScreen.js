import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        setLoading(true);
        const {data} = await axios.get("/api/products");
        setLoading(false);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  },[])

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
