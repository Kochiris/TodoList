import React, {useState} from 'react'
import Buttons from '../app/todos/components/Buttons';
import TodoForm from './TodoForm'

// import TodoList from './TodoList'
function Todo(props) {
    // eslint-disable-next-line
     const [edit,setEdit] = useState({
         id:null,
         value: ""
         
    })
    // const removeTodo = ide => {
    //   const removeArr = [...props.todos].filter(todo => todo.id!==ide)
    //   props.setTodos(removeArr)
    // }
    
    const submitUpdate = value =>{
      props.updateTodo(edit.id, value)
      setEdit({
        id:null,
        value: ""
      })
    }

    if(edit.id!== null){
      return <TodoForm id={edit.id} edit={edit} onSubmit={submitUpdate}/>
    }
    
    
    return props.todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div 
          key={todo.id}
          onClick={() => props.completeTodo(todo.id)}
          >

            {todo.text}
            
          </div>

          <div className='icons'>
          
            <Buttons setEdit={setEdit} todo={todo} removeTodo={props.removeTodo} />

          </div>
          
          
        </div>
      ));

}

export default Todo
