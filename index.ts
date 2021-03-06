/*
We always write TS code inside of '.ts' files.
1. import that axio module that we've installed.
2. pass the dummy data -> one item from list. create a variable named url and assign it the url address. We are using axios to make an network request to that url.
3. Print out the JSON data we get back which should be the x1 To Do item.
4. Run the entire code.
We can't run TS code directly inside of browser or with node.js. We have to compile this into plain JS, then we can execute the resulting JS code.
To compile our code we need to access the compiler using this cmd: tsc 
then the name of the file we want to compile: index.ts
Now, we have the complied version which is: index.js
To run this we use the node command line tool: node index.js
Now, the To Do item is printed out in terminal using this cmd: ts-node index.ts
The printout will be: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
*/
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// use axios to make an network request to that url. Pass in the url to the get() function. This will make a http get request to that url and attempt to fetch that JSON data.
// To get a notification on when the request is complete, we can change on a then statement that will
// This entire operation is async, so by calling axios.get() we're going to receive a promise in return that will be called with the response once we get a response from that API.
// Print out the JSON data we get back which should be the x1 To Do item.

// TS: write the 3 different properties the response has, and type of data each properties reference:
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
// We can tell TS that this response.data is going to be one of those Todo's by adding this at end: as Todo;
// Now, TS will highlight our errors by underline the issue/bugs.
axios.get(url).then((response) => {
  const todo = response.data as Todo;
  // Print report as multi-line String that is easier to read:
  // Pull the id property from the todo object:
  //
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // Calling the logTodo function. TS is telling us that completed should be a boolean not a string, but we tried to passin a boolean as the second argument to the logTodo fn
  // but that second arg has to be a string. This is why the second arg is underlined in red -> showing the developer that this is an error. Now, fixed it so now errors.
  logTodo(id, title, completed);
});
// The report print out using back tickets:
// logTodo function with x3 variables passed-in and using type annotation/TS synatx to describe the type of each variable that it's going to be so that when we call this fn
// and pass-in these variables but make an mistake TS will highligh the error for us.
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
`);
};
