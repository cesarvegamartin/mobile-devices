import type ShoppingAddProductModel from './ShoppingAddProduct.model';

export type ShoppingAddProductServiceProps = ShoppingAddProductModel;
export type ShoppingAddProductServiceReturn = {
	count: number;
};

const ShoppingAddProductService = async (
	props: ShoppingAddProductServiceProps,
) => {
	const { product, colorCode, storageCode } = props;

	const res = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
		method: 'POST',
		body: JSON.stringify({
			id: product.id,
			colorCode,
			storageCode,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data: ShoppingAddProductServiceReturn = await res.json();

	return data;
};

export default ShoppingAddProductService;
