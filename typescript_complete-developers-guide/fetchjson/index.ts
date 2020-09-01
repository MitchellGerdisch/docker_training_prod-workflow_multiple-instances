import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// define the structure of the json response data
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

/*
 * call the url and wait (.then()) for a response which will be placed in the var, "response"
 */
axios.get(url).then((response) => {
  const todo = response.data as Todo; // tell typescript that this is meant to be a Todo structure type
  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, finished: boolean) => {
  console.log(`
    The TODO with ID ${id}
    has a title of ${title}
    has finished status ${finished}`);
};
