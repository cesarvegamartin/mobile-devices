import ProductListController from './ProductListController';

export async function loader() {}

export function Component() {
	return <ProductListController />;
}

Component.displayName = 'ProductList.route';
