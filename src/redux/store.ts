import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default initialState => {
  const storeState = window.localStorage.getItem('store')
  initialState = storeState ? JSON.parse(storeState) : initialState;
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
      /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() */
    )
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart,
      total: state.total
    };

    window.localStorage.setItem('store', JSON.stringify(persist));
  });

  return store;
};
