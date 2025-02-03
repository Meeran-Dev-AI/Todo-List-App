import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTodo(title);
        setTitle("");
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, justifyContent: "center", marginBottom: 2 }}>
            <TextField 
                variant="outlined"
                placeholder="Add a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ width: "70%" }}
            />
            <Button variant="contained" color="primary" type="submit">
                Add
            </Button>
        </Box>
    );
}

export default AddTodo;
