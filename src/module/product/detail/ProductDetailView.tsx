import { Badge, Grid, Image, Table, Text, Title } from '@mantine/core';
import ShoppingAddProductController from '@/module/shopping/add-product/ShoppingAddProductController';
import type ProductDetailModel from './ProductDetailModel';

type ProductDetailSpecificationProps = {
	title: string;
	data: string | string[];
};

const ProductDetailSpecification = (props: ProductDetailSpecificationProps) => {
	const { title, data } = props;

	const content = Array.isArray(data)
		? data.map((item) => (
				<Text key={item} size="sm">
					{item}
				</Text>
			))
		: data;

	return (
		<Table.Tr>
			<Table.Th flex={1} fw={600}>
				{title}
			</Table.Th>
			<Table.Td flex={1}>{content || '-'}</Table.Td>
		</Table.Tr>
	);
};

type ProductDetailViewProps = {
	product: ProductDetailModel;
};

const ProductDetailView = (props: ProductDetailViewProps) => {
	const { product } = props;

	return (
		<Grid gap={40}>
			<Grid.Col span={{ base: 12, md: 4 }}>
				<Image src={product.imgUrl} />
			</Grid.Col>

			<Grid.Col span={{ base: 12, md: 8 }}>
				<Title size="xl">{product.brand}</Title>
				<Text size="lg">{product.model}</Text>
				<Badge color={product.price ? 'pink' : 'grey'}>
					{product.price ? `${product.price}€` : 'Out of stock'}
				</Badge>

				<Title size="lg" my={20}>
					Specifications
				</Title>
				<Table variant="vertical" layout="fixed" withTableBorder>
					<Table.Tbody>
						<ProductDetailSpecification title="CPU" data={product.cpu} />
						<ProductDetailSpecification title="RAM" data={product.ram} />
						<ProductDetailSpecification
							title="Operating System"
							data={product.os}
						/>
						<ProductDetailSpecification
							title="Display Type"
							data={product.displayType}
						/>
						<ProductDetailSpecification
							title="Display Resolution"
							data={product.displayResolution}
						/>
						<ProductDetailSpecification
							title="Display Size"
							data={product.displaySize}
						/>
						<ProductDetailSpecification
							title="Battery"
							data={product.battery}
						/>
						<ProductDetailSpecification
							title="Primary Camera"
							data={product.primaryCamera}
						/>
						<ProductDetailSpecification
							title="Secondary Camera"
							data={product.secondaryCmera}
						/>
						<ProductDetailSpecification
							title="Dimensions"
							data={product.dimentions}
						/>
						<ProductDetailSpecification title="Weight" data={product.weight} />
					</Table.Tbody>
				</Table>

				{product.price && <ShoppingAddProductController product={product} />}
			</Grid.Col>
		</Grid>
	);
};

export default ProductDetailView;
