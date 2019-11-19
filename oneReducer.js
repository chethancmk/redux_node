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


//Actions require mandatory type property. Define as constant to avoid spelling issues and reusability.
const DO_ADD1 = "DO_ADD1"

//Action is just a JS object with type property. Additional property can be added. 
const action = {
    type: DO_ADD1,
    payload: "Data For Action"
}

//Action Creator --> Returns Action
function actionCreator() {
    return action
}


//Reducer - Change application state
//(state,action) => newState

//First Create Initial State

//Reducer is pure function
const initialState = {
    count_1: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DO_ADD1: return {
            ...state,//Make copy of state object
            count_1: state.count_1 + 1
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

const store = createStore(reducer);
console.log(`Initial State`, store.getState())
const unsubscribe = store.subscribe(() => console.log('State Updated : ', store.getState()));
const unsubscribe1 = store.subscribe(() => console.log('State Updated : ', store.getState()));

store.dispatch(actionCreator())
store.dispatch(actionCreator())
store.dispatch(actionCreator())

unsubscribe()


store.dispatch(actionCreator())


