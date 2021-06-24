import types from'./types'

const TODOS = {
    ide: 3,
    counter: [
        { text: 'Walk the dog', id: 0 }, { text: 'suck the cock', id: 1 }, { text: 'as you want', id: 2 }
    ]
    
}
const reDizajn = (props) => {
    let arr = [];
    let a = 0;

    for (var i = 0; i < props.counter.length; i++) {
        arr[i] = { ...props.counter[i], id: a }
        a++
    }
    return arr;
}
function counter(state = TODOS, action) {
    switch (action.type) {
        
        case types.ADD:
            return {

                 counter: [...state.counter, { text: action.text, id: TODOS.ide }],
                ide:state.counter.length+1,
            }
        case types.REMOVE:
            return ({
                ide:state.ide-1,
                counter: [...state.counter].filter(todo => todo.id !== action.id),

            }
            )
        case types.RE:
            return {
                ide: state.counter.length,
                counter: reDizajn(state)

            }
        
            case types.EDIT:
                let arr = [...state.counter].map(item => action.id === item.id ? item = { text: action.text, id: action.id } : item)
          
          
          
                return {
                  ...state,
          
                  counter: arr
                }


        default:


            return state
    }
}
export default counter