import React from "react";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <ListItem 
            sx={{ 
                borderBottom: "1px solid #ddd", 
                padding: "10px",
                display: "flex",
                justifyContent: "space-between"
            }}
        >
            <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <ListItemText 
                primary={todo.title} 
                sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
            />
            <IconButton edge="end" color="error" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
}

export default TodoItem;
