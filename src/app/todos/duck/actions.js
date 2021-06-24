import types from "./types";

const add = item => ({
    type: types.ADD,
    text: item.text,
    id: item.id
})
const remove = item => ({
    type: types.REMOVE, 
    text: item.text,
    id: item.id
})
const re = item => ({
    type: types.RE, 
    text: item.text,
    id: item.id

})
const edit = item => ({
    type: types.EDIT, 
    text: item.text,
    id: item.id
});



export default {
    add,
    remove,
    re,
    edit
}