import express, { request, response } from "express";
import { addTodo ,getAllTodos ,toggleTodoDone,updateTodo,deleteTodo ,toggleTodoDelete} from "../Controller/todo-Controller.js";

const  route = express.Router(); // to post request on the back end from frontend when its type dtat in form it hits this url /todos in the end
route.post('/todos',addTodo)// request from the frontend
route.get('/todos/',getAllTodos);//fetch data from mongodb database
route.get('/todos/:id',toggleTodoDone)//to toggle the data
route.get('/todos/:id',toggleTodoDelete)//to toggle the data TO MARK THE DELETE

route.put('/todos/:id',updateTodo)//to update the data
route.delete('/todos/:id',deleteTodo)//to delete the data

export default route;