import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Container, Typography, Paper } from "@mui/material";

const API_URL = "http://127.0.0.1:5000/api/todos";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then(response => setTodos(response.data));
    }, []);

    const addTodo = (title) => {
        axios.post(API_URL, { title }).then(response => {
            setTodos([...todos, response.data]);
        });
    };

    const deleteTodo = (id) => {
        axios.delete(`${API_URL}/${id}`).then(() => {
            setTodos(todos.filter(todo => todo.id !== id));
        });
    };

    const toggleTodo = (id) => {
        axios.put(`${API_URL}/${id}`).then(response => {
            setTodos(todos.map(todo => todo.id === id ? response.data : todo));
        });
    };

    return (
        <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
            <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
                <Typography variant="h4" gutterBottom>
                    ✅ Modern Todo List
                </Typography>
                <AddTodo addTodo={addTodo} />
                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </Paper>
        </Container>
    );
}

export default App;
