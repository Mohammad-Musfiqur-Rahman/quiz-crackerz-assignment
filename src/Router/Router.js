import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Error404 from "../Components/Error404";
import Home from "../Components/Home";
import Main from "../Components/Main";
import Quiz from "../Components/Quiz/Quiz";
import Recharts from "../Components/Recharts/Recharts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: '/quiz/:id',
                loader: async ({params}) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element: <Quiz></Quiz>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path: '/recharts',
                element: <Recharts></Recharts>
            },
            {
                path:'*',
                element: <Error404></Error404>
            }
        ],        
    },
    
])