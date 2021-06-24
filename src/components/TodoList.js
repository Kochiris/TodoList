import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import todoContainer from '../app/todos/components/todosContainer'


function TodoList() {
    const [todos, setTodos] = useState([])
    const [id, setLastId] = useState(0)

    const updateId = (props) => {
        setLastId(props)
    };



    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [...todos, todo]
        setTodos(newTodos)
        updateId(id + 1) // Update todo id
        todos.forEach(element => {
            if (todo.text.toLowerCase() === element.text.toLowerCase()) { //ch
                newTodos.pop()
                console.log("chuj")
                console.log(todo.id)
                updateId(id)
            }
        })


        console.log(...todos, todo)


    };

    const updateTodo = (todoId, newText) => {
        if (!newText.text || /^\s*$/.test(newText.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newText : item)))
    }

    const removeTodo = ide => {
        const removeArr = [...todos].filter(todo => todo.id !== ide)

        let a = 0
        for (var i = 0; i < removeArr.length; i++) {
            removeArr[i] = { ...removeArr[i], id: a }
            a++
        }
        setTodos(removeArr)
        setLastId(a)
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            console.log(todo)
            return todo;
        });
        setTodos(updatedTodos);

    };

    return (
        <div>
            <h1>Co dzisiaj w planach?</h1>
            <TodoForm id={id} callback={updateId} onSubmit={addTodo} />
            <todosConatiner
                todos={todos}
                completeTodo={completeTodo}
                setTodos={setTodos}
                updateTodo={updateTodo}
                updateId={updateId}
                removeTodo={removeTodo} />
        </div>

    )

}


export default TodoList
