import type ProductModel from '../ProductModel';

export type ProductListServiceProps = {
	search: string;
};

const isStringMatch = (search?: string, value?: string) => {
	if (!search || !value) {
		return true;
	}
	return value.toLowerCase().includes(search.toLowerCase());
};

const createDataFilter = (search: ProductListServiceProps['search']) => {
	if (!Object.values(search).filter(Boolean).length) {
		return () => true;
	}

	return (product: ProductModel) => {
		const matchesBrand = isStringMatch(search, product.brand);
		const matchesModel = isStringMatch(search, product.model);
		return matchesBrand || matchesModel;
	};
};

const ProductListService = async (props: ProductListServiceProps) => {
	const { search } = props;

	const url = new URL(`${import.meta.env.VITE_API_URL}/product`);

	if (search) {
		url.search = new URLSearchParams({ search }).toString();
	}

	const res = await fetch(url.toString());
	const data: ProductModel[] = await res.json();

	const filteredData = data.filter(createDataFilter(search));

	return filteredData;
};

export default ProductListService;
