import { queryOptions } from '@tanstack/react-query';
import type { ProductDetailServiceProps } from './ProductDetail.service';
import ProductDetailService from './ProductDetail.service';

const ProductDetailQuery = (config: Partial<ProductDetailServiceProps>) => {
	const query = queryOptions({
		queryKey: ['productDetail', config.id],
		queryFn: () => ProductDetailService({ id: config.id! }),
		enabled: !!config.id,
	});

	return query;
};

export default ProductDetailQuery;
