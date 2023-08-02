import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import "./components/Header.css"
import InputLink from './components/InputLink/InputLink';
import { useEffect, useState } from 'react';
import TodosList from './components/TodosLists/TodosList';






function App() {


  return (
 <>
 {/* <InputLink /> */}
    <Header />
  <Todo />
  {/* <TodosList  /> */}
 </>
  );
}

export default App;
