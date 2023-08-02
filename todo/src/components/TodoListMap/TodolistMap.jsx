import React, { useState } from 'react'
import "./TodolistMap.css"
import { toggleTodo,updateTodo ,deleteTodo,toggleTodoDelete} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
// import { updateTodo } from '../redux/actions';
// import { deleteTodo } from '../redux/actions';

const TodolistMap = ({todo}) => {
  // const todos = useSelector(state=>state.todos)
 const dispatch = useDispatch();
  
  
  const [editing,setEditing]=useState(false);
  const [text_data,setText_data] = useState(todo.data)
  const [select,setSelect]=useState(false);

  // const dispatch = useDispatch()

  // inner input submit form
  const FormSubmit = (e)=>{
    e.preventDefault();
    setEditing(previoustate => !previoustate);
    dispatch(updateTodo(todo._id,text_data));
}

  const delete_call =()=>{
    setEditing(previoustate =>!previoustate);
    dispatch(deleteTodo(todo._id))
  }
  return (
       
  
    <section className='list'   
      style={{
                textDecoration: todo.done ? 'line-through' : "none",

                color: todo.done ? '#bdc3c7' : ''
            }}
    >
  <div  className='todo_names'   style={{
                textDecoration: todo.done ? 'line-through' : "none",

                color: todo.done ? '#bdc3c7' : ''
            }}>
 <span onClick={() => dispatch(toggleTodo(todo._id))}    style={{display: editing ? "none" : "inline"}}    
   >{todo.data}</span>
   </div>
    

    <form   onSubmit={FormSubmit} style={{ display: editing? "inline":"none"}} >
     
      <input className='edit_input' type='text' value = {text_data} onChange={(e)=>setText_data(e.target.value)}></input>
<button  className='update_button'><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
    </form> 
 <div className='icon' >

 <span  className='icon_cross'  onClick={() => dispatch(toggleTodoDelete(todo._id))}  style={{ display: editing? "none":"inline",
 color: todo.delite? "#f20e0e" : "white",
 
 
 }}  ><i class="fa-regular fa-circle-xmark"></i></span>

 
 <span  className='icon_pen' style={{ display: editing? "none":"inline"}} onClick={()=>setEditing(previoustate =>!previoustate)}><i className="fas fa-pen-to-square" ></i></span>

{/* <button type="submit" className='update_btn'><span  style={{display: editing ? "inline" : "none"}}   onClick={()=>setEditing(previoustate =>!previoustate)} ><i   class="fa-solid fa-arrow-up-from-bracket"></i></span></button> */}
    <span className='icon_trash'  style={{ display: editing? "none":"inline"}}  onClick={delete_call}><i className="fas fa-trash"></i></span>
 </div>

    </section>
  )
}

export default TodolistMap;

