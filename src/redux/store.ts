import { IUserState } from './user/reducer';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ICartState } from './cart/reducer';
import rootReducer from './reducers';
import { ITotalState } from './total/reducer';

export interface IPersister {
  cart: ICartState;
  total: ITotalState;
  user: IUserState;
}

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
      total: state.total,
      user: state.user,
    };

    window.localStorage.setItem('store', JSON.stringify(persist));
  });

  return store;
};

export const getGlobalState = (key?: string): IPersister | null => {
  const storeStatePersister = window.localStorage.getItem('store')
  if (!storeStatePersister) return null
  let storeState = JSON.parse(storeStatePersister)

  if (key) {
    try {
      key.split('.').map(_key => storeState = storeState[_key])
      return storeState
    } catch (error) {
      return null
    }
  }
  return storeState
}
