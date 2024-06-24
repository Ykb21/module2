import { useState } from "react";
import { Box, Container } from "@chakra-ui/react";
import Heading from "./component/Heading";
import Todo from "./component/todo";
import AddTodo from "./component/addtodo";

function App() {
  const [todos, setTodos] = useState<{ text: string, isDone: boolean }[]>([]);
  const [doneCount, setDoneCount] = useState(0);

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    if (newTodos[index].isDone) {
      setDoneCount(doneCount - 1);
    }
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCheckboxChange = (index: number, isChecked: boolean) => {
    const newTodos = [...todos];
    newTodos[index].isDone = isChecked;
    setTodos(newTodos);
    setDoneCount(isChecked ? doneCount + 1 : doneCount - 1);
  };

  return (
    <>
      <Box bg="#24283b" h="100vh" p="4" alignItems="center">
        <Container>
          <Heading />
          <Todo todos={todos} deleteTodo={deleteTodo} handleCheckboxChange={handleCheckboxChange} doneCount={doneCount} />
          <AddTodo todos={todos} setTodos={setTodos} />
        </Container>
      </Box>
    </>
  );
}

export default App;