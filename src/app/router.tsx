import {
	createBrowserRouter,
	type RouteObject as ReactRouteObject,
	redirect,
} from 'react-router';
import AppLayout from '@/display/layout/AppLayout';

export type RouteObject = ReactRouteObject & {
	handle?: {
		title: string;
	};
};

const routes: RouteObject[] = [
	{
		path: '/',
		element: <AppLayout />,
		handle: {
			title: 'Home',
		},
		children: [
			{
				index: true,
				loader: () => redirect('/products'),
			},
			{
				path: 'products',
				handle: {
					title: 'Products',
				},
				children: [
					{
						index: true,
						lazy: async () => import('@/module/product/list/ProductList.route'),
					},
					{
						path: ':id',
						lazy: async () =>
							import('@/module/product/detail/ProductDetail.route'),
						handle: {
							title: 'Detail',
						},
					},
				],
			},
		],
	},
];

const router = createBrowserRouter(routes);

export default router;
