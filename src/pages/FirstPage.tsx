import { FC, useState } from "react";
import { BiCommentAdd } from "react-icons/bi";
import { Todo } from "./Todos";

const FirstPage:FC = ()=>{

  const [todo,setTodo] = useState<Todo[]>([]);
  

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo ={
      id: todo.length + 1,
      text: todoText,
      completed: false

    }
    setTodo([...todo,newTodo])
    setTodoText('')
  }
  const [todoText , setTodoText] = useState<string>('');

  const handleTogle = (id:number) => {
    const updateTodos = todo.map((todo)=> {
      if(todo.id===id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
    setTodo(updateTodos);
  } 



  return <>
    <div className="item-center justify-center ">
    <button className="flex flex-row item-center p-3 justify-center mt-10 cursor-pointer  hover:bg-slate-600 mx-auto rounded-xl active:bg-slate-700">
      <BiCommentAdd className="text-4xl "/>
      <h1 className="font-bold text-lg"> Add Todo</h1>
    </button>

    <div className="flex justify-center items-center ">
    <form onSubmit={onSubmit}>
        <input name="todotitle" placeholder="title" value={todoText} type="text" onChange={(e)=> setTodoText(e.currentTarget.value)} className="border border-slate-500 rounded-md py-1 px-4 "/>
        <button type="submit" className="ml-1 bg-blue-700 px-3 py-1 rounded-lg text-white" >Add</button>

    </form>
    </div>
      {
        todo.map((todo)=> {
          return(
          <div key={todo.id} className='flex flex-row justify-center mt-5 space-x-3 font-light border-2 rounded-md border-gray-300 p-5 mx-10'>
            <input type='checkbox' checked={todo.completed} onChange={() =>handleTogle(todo.id)} />
            <span className="text-center">{todo.text}</span>

          </div>
          )
        })
      }
    </div>
    </>
}

export default FirstPage;
