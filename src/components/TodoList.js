import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { List, Button, ButtonGroup, Box } from "@mui/material";

function TodoList({ todos, toggleTodo, deleteTodo }) {
    const [filter, setFilter] = useState("All"); 

    const filteredTodos = todos.filter(todo => {
        if (filter === "Active") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        return true;
    });

    return (
        <Box sx={{ marginTop: 2 }}>
            {/* Filter Buttons */}
            <ButtonGroup variant="outlined" sx={{ marginBottom: 2 }}>
                <Button onClick={() => setFilter("All")}>All</Button>
                <Button onClick={() => setFilter("Active")}>Active</Button>
                <Button onClick={() => setFilter("Completed")}>Completed</Button>
            </ButtonGroup>

            {/* Todo List */}
            <List>
                {filteredTodos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                ))}
            </List>
        </Box>
    );
}

export default TodoList;
