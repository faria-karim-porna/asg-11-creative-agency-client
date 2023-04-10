// import { createContext } from "react";
// import { LoginInterface } from '../Login/Login';

// type TypeLoginContext = [LoginInterface, React.Dispatch<React.SetStateAction<LoginInterface>>];
// export const UserContext = createContext<TypeLoginContext>([
//   { isSignedIn: false, name: "", email: "", password: "", photo: "" } as LoginInterface,
//   () => null,
// ]);

// // context/todoContext.tsx
// import * as React from "react";
// import { TodoContextType, ITodo } from "../@types/todo";

// export const TodoContext = React.createContext<TodoContextType | null>(null);

// const UserProvider = ({ children }: any) => {
//   const [todos, setTodos] = React.useState<ITodo[]>([
//     {
//       id: 1,
//       title: "post 1",
//       description: "this is a description",
//       status: false,
//     },
//     {
//       id: 2,
//       title: "post 2",
//       description: "this is a description",
//       status: true,
//     },
//   ]);
//   const saveTodo = (todo: ITodo) => {
//     const newTodo: ITodo = {
//       id: Math.random(), // not really unique - but fine for this example
//       title: todo.title,
//       description: todo.description,
//       status: false,
//     };
//     setTodos([...todos, newTodo]);
//   };
//   const updateTodo = (id: number) => {
//     todos.filter((todo: ITodo) => {
//       if (todo.id === id) {
//         todo.status = true;
//         setTodos([...todos]);
//       }
//     });
//   };
//   return <Use.Provider value={{ todos, saveTodo, updateTodo }}>{children}</TodoContext.Provider>;
// };

// export default UserProvider;

// import React, { useState } from "react";
import React, { useState, createContext } from "react";
import { LoginInterface } from "../Login/Login";
interface LoginProviderProps {
  children: React.ReactNode;
}
export const LoginContext = createContext({
  loggedInUser : { isSignedIn: false, name: "", email: "", password: "", photo: "" },
  setLoggedInUser : (loggedInUser: LoginInterface) => {},
});
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [loggedInUser, setLoggedInUser] = useState({ isSignedIn: false, name: "", email: "", password: "", photo: "" });
  return <LoginContext.Provider value={{loggedInUser, setLoggedInUser}}>{children}</LoginContext.Provider>;
};
