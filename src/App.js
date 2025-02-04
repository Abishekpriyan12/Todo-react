import { VStack, Text } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const todosList = [
    { id: 1, text: "Buy eggs" },
    { id: 2, text: "Walk the dog" },
    { id: 3, text: "Watch a movie" },
  ];

  const [todos, setTodos] = useState(todosList);

  function deleteTodo(id) {
    // IMPLEMENT DELETE TODO
  }

  function addTodo(newTodo) {
    // IMPLEMENT ADD TODOS
  }

  function editTodo(id, updatedTodo) {
    // IMPLEMENT EDIT TODO
    // setTodos(updatedItem);
  }

  return (
    <VStack p={5}>
      <Text
        bgGradient="red"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Todo App
      </Text>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
