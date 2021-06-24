import React from 'react'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function Buttons(props) {
    const theme = createMuiTheme({
        palette: {
          secondary: {
            main: '#14ba20'
          }
        }
      });

    return (
        <div>
            <MuiThemeProvider theme={theme}>
      <Fab onClick={()=> props.setEdit({id: props.todo.id, value: props.todo.text})} size="small"  color="secondary" aria-label="edit" >
        <EditIcon/>
      </Fab>
      <Fab onClick={()=> props.removeTodo(props.todo.id)} size="small"  color="secondary" aria-label="edit" >
        <DeleteIcon/>
      </Fab>
      </MuiThemeProvider>
        </div>
    )
}

export default Buttons
