import { createBrowserRouter, type RouteObject, redirect } from 'react-router';
import AppLayout from '@/display/layout/AppLayout';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				index: true,
				loader: () => redirect('/products'),
			},
			{
				path: 'products',
				children: [
					{
						index: true,
						element: <div>Product List</div>,
					},
					{
						path: ':id',
						element: <div>Product Detail</div>,
					},
				],
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
