import React, { useEffect, useState } from 'react'
import Rating from '../components/Rating';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { detailsProduct } from '../actions/productAction';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);
    const productDetails = useSelector(state => state.productDetails)
    const [qty, setQty] = useState(1);
    const {product, error, loading} = productDetails;

    const navigate = useNavigate()
    

    useEffect(()=>{
        dispatch(detailsProduct(id));
    },[dispatch,id])

    const addToCartHandaler = () =>{
        navigate(`/cart/${id}?qty=qty`)
    }
    return (
        <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
      ) : (
      <div >
          <Link to="/">Back to Result</Link>
            <div className='row top'>
            <div>
                
            </div>
            <div className='col-2'>
                <img className='large' src={product.image} alt={product.name} />
            </div>
            <div className='col-2'>
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating rating={product.rating} numReviews={product.numReviews} />
                    </li>
                    <li>
                        Price : ${product.price}
                    </li>
                    <li>
                        Description
                        <p>{product.description}</p>
                    </li>
                </ul>
            </div>
            <div className='col-1'>
                <div className='card card-body'>
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${product.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div>
                                    {product.countInStock > 0 ? <span className='success'>In Stock</span>: <span className='danger'>Unavailable</span>}
                                </div>
                            </div>
                        </li>
                        {
                            product.countInStock > 0 && (
                                <>
                                <li>
                                    <div className='row'>
                                        <div>Qty</div>
                                        <div>
                                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                                {[...Array(product.countInStock).keys()].map(x=>(
                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </li>
                                    <li>
                                        <button onClick={addToCartHandaler} className='primary block'>Add to card</button>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
      </div>
      )
      }
    </div>
    );
}
