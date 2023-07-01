import React from "react";
import HeroSection from "./pages/Home/HomeSection";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error/ErrorPage"
import RootLayout, {loader as blogLoader} from "./layouts/RootLayout";
import BlogDetail, {loader as blogdetail} from "./pages/BlogDetail/BlogDetail";
import AllPost from "./pages/AllPost/AllPost";
import Contact from "./pages/contact/Contact";
import AuthorLisa from "./pages/Authors/AuthorLisa";
import AuthorTiffany from "./pages/Authors/AuthorTiffany";
import Food from "./pages/Category/Food";
import Life from "./pages/Category/Life";
import Music from "./pages/Category/Music";
import Travel from "./pages/Category/Travel";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    loader: blogLoader,
    id: 'blog',
    children:[
      {index: true, element: <HeroSection/>},
      {path: '/contact', element: <Contact/>},
      {path:'/all-post', element: <AllPost/>},
      {path: '/:blogid', element:<BlogDetail/>, loader: blogdetail},
      {path:'all-post/:blogid', element:<BlogDetail/>, loader: blogdetail},
      {path: '/authors/lisa', element: <AuthorLisa/>},
      {path: '/authors/tiffany', element: <AuthorTiffany/>},
      {path: '/food', element: <Food/>},
      {path: '/life', element: <Life/>},
      {path: '/music', element: <Music/>},
      {path: '/travel', element: <Travel/>}
    ]
  }
])
const App = () => {
  return(
    <RouterProvider router={router}/>
  )
}
export default App;