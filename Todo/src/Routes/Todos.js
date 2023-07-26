// => Posts.js
import React from 'react'
import TodoForm from "../components/TodoForm"
import { useQuery, gql ,useMutation} from '@apollo/client';

import Item from '../components/Item'
const CREATE_TODO = gql`mutation CreateTodo($input : CreateTodoInput!){
  createTodo(input:$input){
    id
    title
    completed
  }
    
  }
  `;


  const GET_TODOS = gql`
  query GetTodos {
    getTodosByUserId(userId: 1) {
      id
      title
      completed
  
    }
  }
`;

const DELETE_TODO = gql`mutation DeleteTodo($id:Int!){
  deleteTodo(id:$id){
    title
  }
    
  }
  `


const UPDATE_TODO = gql`mutation UpdateTodo($input : UpdateTodoInput!){
  updateTodo(input:$input){
    title
    completed
  }
    
  }
  `


export default function Posts() {
  const [addTodo, { data, loading, error }] = useMutation(CREATE_TODO,{
    refetchQueries: [{ query: GET_TODOS }],
  });
  const [deleteTodo] = useMutation(DELETE_TODO,{
    refetchQueries: [{ query: GET_TODOS }],
  });


  const [updateTodo] = useMutation(UPDATE_TODO,{
    refetchQueries: [{ query: GET_TODOS }],
  });
  const { data:Todos } = useQuery(GET_TODOS);
  

  function addHandler(data){
    addTodo({ variables: { input: {"title":data,"completed":false,"userId":1} } })
      }

  return (
    <div>
        <h1>Welcome to Todos route</h1>
        <TodoForm addHandler={addHandler}/>
        <Item data={Todos} deleteTodo={deleteTodo} updateTodo={updateTodo}></Item>

    </div>


  )
}
