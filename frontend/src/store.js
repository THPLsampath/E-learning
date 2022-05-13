import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import data from './data';
import thunk from 'redux-thunk';

const reducer = (state, action) =>{
    return{product: data.products}
}

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;