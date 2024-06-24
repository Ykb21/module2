import { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";

type AddTodoProps = {
  todos: { text: string, isDone: boolean }[];
  setTodos: React.Dispatch<React.SetStateAction<{ text: string, isDone: boolean }[]>>;
};

const AddTodo = ({ todos, setTodos }: AddTodoProps) => {
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input && !todos.some(todo => todo.text === input)) {
      const newTodos = [...todos, { text: input, isDone: false }];
      setTodos(newTodos);
      setInput('');
    }
  };
  return (
    <Box my={3} mx={1} gap={3}>
      <Input
        placeholder="Add TODO"
        value={input.trim()}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button my={3} colorScheme="green" onClick={addTodo} >
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;