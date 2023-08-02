import axios from 'axios';

import { ADDNEW_TODO , GETALL_TODO,TOGGLE_TODO,TOGGLE_TODO_DELETE,UPDATE_TODO,DELETE_TODO,TOGGLE_TABS} from './type';

const API_URL = '/api';
// //1 action creation
export const addNewTodo = (data) => async (dispatch) => {
    try {
        //creating frontend api to get the data from user
        const res = await axios.post(`${API_URL}/todos`, { data }); // data will get sotred in monogdb database from this api

        dispatch({ type: ADDNEW_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API ', error.message);
    }
}
// // 2 action creation fetchimg api  data from mongodb database

export const getAllTodos = () => async (dispatch) => {
try {

    const res = await axios.get(`${API_URL}/todos`)// data will get fetched from monogdb database from this api

    dispatch({ type: GETALL_TODO , payload: res.data });
} catch (error) {
    console.log('Error while calling getAllTodos API ', error.message);
}
} 

// //toggle between the items
export const toggleTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}
//toggle todoDelete
export const toggleTodoDelete = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TODO_DELETE , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}
// update the text task
export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`,{data});

        dispatch({ type: UPDATE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateAllTodos API ', error.message);
    }
}
//delete the data
export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);

        dispatch({ type: DELETE_TODO , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
}
}
//for toogle tabs
export const toggleTab = (tab)=> async (dispatch)=>{
    dispatch({ type:TOGGLE_TABS, activeTab:tab})
}