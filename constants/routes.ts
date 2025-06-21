export const routes = Object.freeze({
	home: "/",
	about: "/about",
	contact: "/contact",
	dashboard: "/dashboard",
	login: "/login",
	register: "/register",
	settings: "/settings",
});

export const protectedRoutes: Array<string> = [
	routes.dashboard,
	routes.settings,
];
