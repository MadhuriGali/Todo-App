
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Todos from "./Todos";
import AddBoard from "./AddBoard";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import EditBoard from "./EditBoard";

const Body=()=>{

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:"/addBoard",
            element:<AddBoard/>
        },
        {
            path:"/todos/:boardname",
            element:<Todos/>
        },
        {
            path:"/addtodo/:boardname",
            element:<AddTodo/>
        },
        {
            path:"/editTodo",
            element:<EditTodo/>
        },
        {
            path:"/editBoard/:boardname",
            element:<EditBoard/>
        },
       

    ]
    )
    return (
        <div>
          <RouterProvider router={appRouter}/>
        </div>
    )
}
export default Body;
