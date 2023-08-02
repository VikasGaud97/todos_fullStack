import { request } from 'express';
import Todo from '../model/Todo.js';

export const addTodo = async (request, response) => {
    try {
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();

        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getAllTodos = async (request, response) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })
        console.log("text updated  on  database")
        return response.status(200).json(todos);
    } catch (error) {
        console.log("text  not updated  on  database")
        return response.status(500).json(error.message);
    }
}

export const toggleTodoDone = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )
        console.log("done marked sucessful")
        await todo.save();

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

// toggle todo Delete
export const toggleTodoDelete = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { delite: !todoRef.delite }
        )
        console.log("delete marked sucessful")
        await todo.save();

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const updateTodo = async (request, response) =>{
 try {
  await Todo.findOneAndUpdate({_id: request.params.id},{$set :{data:request.body.data}})
//      const {_id, data} = request.body
//  Todo.findByIdAndUpdate(_id,{data})
const todo =  await Todo.findById(request.params.id)
 console.log("text updated sucessful")
 return response.status(200).json(todo);
}catch (error) {
    console.log("canot connect to the server")
  return response.status(500).json();
}
}

export const deleteTodo = async (request, response) => {
    try {
      
        const todo = await Todo.findByIdAndDelete({_id:request.params.id})
        // const todo = await Todo.findByIdAndDelete({_id:request.body})
        console.log("delete sucessful")
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}