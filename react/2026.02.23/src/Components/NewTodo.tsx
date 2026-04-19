import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { defaultTodoItem, type ITodoItem } from "../utils/todo-types";

const NewTodo = () => {
     const [NewTodo, setNewTodo] = useState<ITodoItem>(defaultTodoItem)
    function handleAdd(){
       if(
        NewTodo.name.length >= 3 &&
        NewTodo.name.length <= 64 &&
        !Number.isNaN(NewTodo.durration) &&
        Number.isFinite(NewTodo.durration) &&
        NewTodo.durration >= 1&&
        NewTodo.durration <= 12*60
       ){
        
        console.log(NewTodo);
        return;
       }
       console.warn("Invalid obj")
    }
    return <div className="new-todo">
        <TextField placeholder="Item name" value={NewTodo.name} onChange={(e) => setNewTodo({
            ...NewTodo, name: e.target.value.trim()
        })}/>
        <TextField placeholder="Durration" value={NewTodo.durration} onChange={(e) => setNewTodo({
            ...NewTodo, durration: parseInt(e.target.value.trim())
        })}/>
        <Button onClick={handleAdd} variant="contained">Add todo</Button>
        </div>;

};
export default NewTodo;