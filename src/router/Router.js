import About from "../pages/About";
import ErrorPage from "../pages/Error";
import Login from "../pages/Login";
import PostPage from "../pages/PostPage";
import Posts from "../pages/posts";

export const priveateRoutes = [
	{ path: '/about', element: <About /> },
	{ path: '/posts', element: <Posts /> },
	{ path: '/posts/:id', element: <PostPage /> },
	{ path: '*', element: <ErrorPage /> },
];

export const publicRoutes = [
	{ path: '/login', element: <Login /> },
	{ path: '*', element: <Login /> }
]