import ProductDetailController from './ProductDetailController';

export async function loader() {}

export function Component() {
	return <ProductDetailController />;
}

Component.displayName = 'ProductDetail.route';
