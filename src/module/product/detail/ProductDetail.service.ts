import type ProductDetailModel from './ProductDetailModel';

export type ProductDetailServiceProps = {
	id: string;
};

const ProductDetailService = async (props: ProductDetailServiceProps) => {
	const { id } = props;

	const res = await fetch(`${import.meta.env.VITE_API_URL}/product/${id}`);
	const data: ProductDetailModel = await res.json();

	return data;
};

export default ProductDetailService;
