import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { priveateRoutes, publicRoutes } from "../router/Router.js";
import { AuthContext } from "../utils/context.js";

export default function AppRouter() {
	const { isAuth } = useContext(AuthContext);
	return isAuth ? (
		<Routes>
			{priveateRoutes.map((route) => (
				<Route element={route.element} path={route.path} key={route.path} />
			))}
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route element={route.element} path={route.path} key={route.path} />
			))}
		</Routes>
	);
}
