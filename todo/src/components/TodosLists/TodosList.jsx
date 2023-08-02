
import React, { useEffect, useState } from 'react';
import { getAllTodos,deleteTodo} from '../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
// import { useDispatch ,useSelector} from 'react-redux'
import TodolistMap from '../TodoListMap/TodolistMap'
// import Todo from '../Todo'
import Tabs from '../TABS/Tabs'
import { ACTIVE_TODOS,DONE_TODOS,ALL_TODOS } from '../redux/actions/type'
import "../TABS/tabs.css"
import Todo from '../Todo'
import "./todolist.css"
//import all todoos in this component from redux stored
const TodosList = (props) => {
  // const toggle = props.filteredTodos
  // console.log("toggle are"+toggle)
  const todos = useSelector(state=>state.todos)
  const dispatch = useDispatch();
  
  const currentTab = useSelector(state => state.currentTab)



  // console.log("list of listTodos.js"+todos.data)
  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  const getTodos = ()=>{
      if(currentTab === ALL_TODOS){
        return todos.filter(todo=>todo.data.toLowerCase().includes(props.searchTerm.toLowerCase()))
      }else if(currentTab === DONE_TODOS){
        return todos.filter(todo=>todo.done).filter(todo=>todo.data.toLowerCase().includes(props.searchTerm.toLowerCase()))
      }else if(currentTab === ACTIVE_TODOS){
        return todos.filter(todo=>!todo.done).filter(todo=>todo.data.toLowerCase().includes(props.searchTerm.toLowerCase()))
      }
      
    }


    const deleteAllDone =()=>{
      todos.forEach(({delite , _id})=> {
            if(delite){
              dispatch(deleteTodo(_id))
            }
          });
    }
  return (
   
    <div className='todo_cont'>
    <div>
      <Tabs currentTab={currentTab} />
      {
  todos.some(todo=>todo.delite)?(<button onClick={deleteAllDone} className='red_button'>Delete All</button>):null
 }
    </div>
    {getTodos().map(todo => (
          <TodolistMap key={todo._id} todo={todo} >{todo.data}
          </TodolistMap>
        ))}
    </div>
   
    
  )
}

export default TodosList 

