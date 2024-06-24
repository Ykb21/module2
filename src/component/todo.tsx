import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";





type TodoProps = {
    todos: { text: string, isDone: boolean }[];
    deleteTodo: (index: number) => void;
    handleCheckboxChange: (index: number, checked: boolean) => void;
    doneCount: number
  };
  
  const Todo = ({ todos, deleteTodo, handleCheckboxChange, doneCount }: TodoProps) => {
    return (
      <>
        {todos.map((todo, index) => (
          <Flex key={`index`} flexDirection="column" m="2" gap="5" fontWeight="bold">
            <Flex justifyContent="space-between" alignItems="center">
              <Checkbox
                className="custom-checkbox"
                color="white"
                spacing={10}
                colorScheme="green"
                isChecked={todo.isDone}
                onChange={(e) => handleCheckboxChange(index, e.target.checked)}
              >
                <Text as="span" textDecoration={todo.isDone ? "line-through" : "none"}>
                  {todo.text}
                </Text>
              </Checkbox>
              <Box
                border="1px"
                borderColor="red.500"
                borderRadius="sm"
                px={2}
                py={1}
                onClick={() => deleteTodo(index)}
              >
                <DeleteIcon color="red.500" />
              </Box>
            </Flex>
          </Flex>
        ))}
        <Flex justifyContent="center" alignItems="center" my={3}>
          <Text align="center" mb={3} as="b" textColor="white" fontSize="2xl" textAlign="center">
            DONE: {doneCount}
          </Text>
        </Flex>
      </>
    );
  };
  
  export default Todo;


  