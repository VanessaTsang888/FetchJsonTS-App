# Fetch JSON Application

This mini application uses TypeScript (TS) syntax also know as type annotations to highlight errors to us developers whilst we are writing our program. Therefore, by using TS we don't need to execute our code to find out if we can errors in our code.

The objective of this appliation is to make a http get network request to fetch some JSON and print out the data into our Terminal.

## The Flow

The flow I used to develop this app is:

1. Take a look at the API I'll use to fetch the data.
2. Create a new project directory.
3. Create a package.json file.
4. Install axios to make a network request.
5. Write the TS code.

## How to find the todos API

The API is a fake JSON API that serves up dummy data that we can use for testing/learning purpose. Find the API: [JSON Placeholder](jsonplaceholder.typicode.com)
Scroll down to Resources -> these are different types of records, so we can make a request or attempt to fetch from. We'll attempt to fetch the list of [/todos](https://jsonplaceholder.typicode.com/todos).
Click on that link -> copy the url as we'll make network request to this address -> we'll get back a list of to do's items but we just need to fetch the first item from that list so we can modify the url slightly: at end of url, add '/1' which will give us a single to do on our screen which is the data we want to fetch and print out some info to our terminal.

### Print Data in Terminal

To print out the JSON data in the Terminal:

- Download the project directory from my GitHub repository named [FetchJsonTS-App](https://github.com/VanessaTsang888/FetchJsonTS-App)
- in your Terminal type this command:

`ts-node index.ts`

Now, you will see the JSON data as a little report that is easy to read.
