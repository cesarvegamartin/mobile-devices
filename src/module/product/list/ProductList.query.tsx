import { queryOptions } from '@tanstack/react-query';
import ProductListService, {
	type ProductListServiceProps,
} from './ProductList.service';

const ProductListQuery = (config: ProductListServiceProps) => {
	const query = queryOptions({
		queryKey: ['productList', config.search],
		queryFn: () => ProductListService(config),
	});

	return query;
};

export default ProductListQuery;
