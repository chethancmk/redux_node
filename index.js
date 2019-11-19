//Store - Holds the state of the Application
//Action - Describe what to do
//Reducer - Ties Store and action together. Does the change to the state based on action.

//3 Principles
//Single Store with a object tree. Everything stored as Object.
//Always change state by emitting action. Emit Action DO_ACTION1
//Pure Reducer - Controls of State Transitions. Takes previous state and action as inputs and outputs new state.
//  reducer(state,action) => newState

const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

//Middleware Logger
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

//Actions require mandatory type property. Define as constant to avoid spelling issues and reusability.
const DO_ADD1 = "DO_ADD1"
const DO_ADD2 = "DO_ADD2"

//Action is just a JS object with type property. Additional property can be added. 
const action1 = {
    type: DO_ADD1,
    payload: "Data For Action 1"
}

//Action is just a JS object with type property. Additional property can be added. 
const action2 = {
    type: DO_ADD2,
    payload: "Data For Action 2"
}

//Action Creator --> Returns Action
function action1Creator() {
    return action1
}

//Action Creator --> Returns Action
function action2Creator() {
    return action2
}



//Reducer - Change application state
//(state,action) => newState

//First Create Initial State

//Reducer is pure function
const initialState1 = {
    count_1: 10
}

const initialState2 = {
    count_2: 20
}

const reducer1 = (state = initialState1, action) => {
    switch (action.type) {
        case DO_ADD1: return {
            ...state,//Make copy of state object
            count_1: state.count_1 + 1
        }
        default: return state
    }
}

const reducer2 = (state = initialState2, action) => {
    switch (action.type) {
        case DO_ADD2: return {
            ...state,//Make copy of state object
            count_2: state.count_2 + 2
        }
        default: return state
    }
}

//Store Creation
//Store - Following Functions
//a. Store App State
//b. getState() returns back the state 
//c. update state with dispatch(action) method
//d. Register subscribers via subscribe(listener). Also unsubscribe.

const rootReducer = combineReducers({
    reducer1, second: reducer2
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log(`Initial State`, store.getState())
const unsubscribe = store.subscribe(() => console.log('State Updated : ', store.getState()));

store.dispatch(action1Creator())
store.dispatch(action1Creator())
store.dispatch(action2Creator())
store.dispatch(action2Creator())

unsubscribe()

