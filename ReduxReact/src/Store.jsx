import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk} from "redux-thunk";

const initialValue = {
  tasks: [],
};

const ADD_TASK = "tasks/add";
const DELETE_TASK = "tasks/delete";
const FETCH_TASK = "tasks/fetch";

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
      break;
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((task, index) => index !== action.payload) };
      break;
    case FETCH_TASK:
      return { ...state, tasks: [...state.tasks, ...action.payload] };
      break;
    default:
        return state;
  }
};

export const actionAdd = (data) => {
    return {type: ADD_TASK, payload: data}
}
export const actionDelete = (index) => {
    return {type: DELETE_TASK, payload: index}
}
export const actionFetch = () => {
    return async(dispatch) => {
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
            const data = await res.json();
            console.log(data);
            dispatch({type: FETCH_TASK, payload: data.map(task => task.title)})
        }catch(error){
            console.log(error)
        }
    }
}

export const store = createStore(reducer, applyMiddleware(thunk));
