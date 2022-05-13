import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productDetailsReducers, productListReducers } from './reducers/productReducers';

const reducer = combineReducers({
  productList : productListReducers,
  productDetails : productDetailsReducers
})

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;