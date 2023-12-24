import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Service } from '../pages/Service';
import { About } from '../pages/about';
import { Plans } from '../pages/Plans';
import { Contact } from '../pages/contact';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/Service',
		element: <Service />,
	},
	{
		path: '/About',
		element: <About />,
	},
	{
		path: '/Plans',
		element: <Plans />,
	},
	{
		path: '/Contact',
		element: <Contact />,
	},
]);
export const Index = () => {
	return <RouterProvider router={router} />;
};
