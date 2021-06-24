import React, {useState, useEffect, useRef} from 'react'


function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const ref = useRef(null);

    useEffect(()=>{
        ref.current.focus()
    })
    

    const handleChange=e=>{
        setInput(e.target.value)
    };
   
    
    const handleSubmit=e=>{
        e.preventDefault();
        props.onSubmit({
            id: props.id,
            text: input,
            
            
        });
       // props.callback(props.lastId+1)
        setInput("")
        
    };
    return (
        
        <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={ref}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={ref}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
        
    );
}

    
    


export default TodoForm 

