import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import SectionLayout from '@/display/layout/SectionLayout';
import ProductDetailQuery from './ProductDetail.query';
import ProductDetailView from './ProductDetailView';

const ProductDetailController = () => {
	const id = useParams<{ id: string }>().id;
	const query = useQuery(ProductDetailQuery({ id }));

	return (
		<SectionLayout title="Product Detail">
			{query.data && <ProductDetailView product={query.data!} />}
		</SectionLayout>
	);
};

export default ProductDetailController;
