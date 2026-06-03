import {
	AspectRatio,
	Badge,
	Button,
	Card,
	Group,
	Image,
	Text,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { NavLink } from 'react-router';
import type ProductModel from '../ProductModel';

type ProductListItemViewProps = {
	product: ProductModel;
};

const ProductListItemView = (props: ProductListItemViewProps) => {
	const { product } = props;

	const { hovered, ref } = useHover();

	return (
		<NavLink
			ref={ref}
			to={`/products/${product.id}`}
			style={{
				textDecoration: 'none',
				color: 'inherit',
			}}
		>
			<Card shadow="sm" padding="lg" withBorder>
				<Card.Section>
					<AspectRatio ratio={160 / 212} mx="auto" bg="#ddd">
						<Image
							src={product.imgUrl}
							fallbackSrc={`https://placehold.co/160x212?text=${product.brand}`}
						/>
					</AspectRatio>
				</Card.Section>

				<Group justify="space-between" mt="md" mb="xs">
					<Text fw={500}>{product.brand}</Text>

					<Badge color={product.price ? 'pink' : 'grey'}>
						{product.price ? `${product.price}€` : 'Out of stock'}
					</Badge>
				</Group>

				<Text size="sm" c="dimmed">
					{product.model}
				</Text>

				<Button color={hovered ? 'blue' : 'gray'} fullWidth mt="md">
					View details
				</Button>
			</Card>
		</NavLink>
	);
};

export default ProductListItemView;
