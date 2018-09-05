const redux = require('redux'); //node.js syntax for practice
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// Reducer 
const rootReducer = (state = initialState, action) => {
  return state;
};

// Store
const store = createStore(rootReducer);


// Dispatching Action

// Subscription