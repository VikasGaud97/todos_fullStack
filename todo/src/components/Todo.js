import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "./redux/actions";
import TodosList from "./TodosLists/TodosList";
// import axios from "axios";
import "./Todo.css"



const Todo = ()=>{
  // const [todos, setTodos] = useState([]);
// const [filteredTodos, setFilteredTodos] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

// const API_URL = 'http://localhost:8000/todos';
// // const url =" https://jsonplaceholder.typicode.com/todos"
// useEffect(() => {
//   // Simulated API call to fetch todos
//   fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {
//       setTodos(data);
//       setFilteredTodos(data);
//     })
//     .catch(error => {
//       console.log('Error fetching todos:', error);
//     });
// }, []);

const handleSearch = (e) => {
  const searchTerm = e.target.value;
  console.log('Render - Search Term', searchTerm)
  setSearchTerm(searchTerm);

  // const filtered = todos.filter(todo =>
  //   todo.data.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // setFilteredTodos(filtered);
}

const handleClearSearch =(e)=>{
  e.preventDefault()
setSearchTerm('')
}

// const handleTodoClick = (id) => {
//   // Handle the onclick event for a specific todo item
//   console.log(`Clicked on todo with ID: ${id}`);
// };





//=-=-=-===-=-=-=-=-=-=-===-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-

  const [text, setText] = useState("");
  const [searchIcon,setSearchIcon]=useState(false)

  
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
      e.preventDefault();
      dispatch(addNewTodo(text));
      setText('');
  }


return (
 <>
 
<div className='main-container'>
  <div   className="search_icon" onClick={()=>setSearchIcon(previous=>!previous)}><i class="fa-solid fa-magnifying-glass"></i></div> 
  <div   style={{display: searchIcon ? "inline":"none"}} className="plus_icon" onClick={()=>setSearchIcon(previous=>!previous)}><i class="fa-solid fa-plus"></i></div> 
    <form  >
    <div className="input_layer"> 
      <input type="text"  value={searchTerm} onChange={handleSearch} style={{display: searchIcon ? "inline":"none"}}  placeholder="search" className="search_input"></input>
      </div>
{searchTerm.length > 0 &&  (<button className="clear_button" onClick={handleClearSearch}><i class="fa-regular fa-circle-xmark"></i></button>
)}    </form>
   <form className='form' onSubmit={onFormSubmit} > 
   <div className="input_middle">
      <input   style={{display: searchIcon ? "none":"inline"}}  className="input_field" type='text' placeholder='write here' value={text} onChange={(e) => setText(e.target.value)}></input>
   </div>

      <button  className='input_btn'>Add</button>
      </form>
  <TodosList searchTerm={searchTerm} />
      </div>
      {/* <div style={{color:"white"}}>=
        {filter.map((data,id)=>(
          <div key={id}>{data.data}</div>
        ))}
       
         
        </div> */}
 </>
  )
}

export default Todo