import React from 'react'
import { connect } from 'react-redux';
import Buttons from './Buttons';

const todoContainer=(props)=>props.todos.map((todo, index) => (
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
          
            <Buttons  todo={todo} removeTodo={props.removeTodo} />

          </div>
          
          
        </div>))
    const mapStateToProps=state=>({
        todos:state.todos
    })

export default connect(mapStateToProps,)(todoContainer)
