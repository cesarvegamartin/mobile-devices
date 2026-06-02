import {
	ActionIcon,
	Alert,
	Button,
	Group,
	SimpleGrid,
	Text,
	TextInput,
} from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import SectionLayout from '@/display/layout/SectionLayout';
import ProductListQuery from './ProductList.query';
import ProductListItemView from './ProductListItemView';

const ProductListController = () => {
	const [inputSearch, setInputSearch] = useInputState('');
	const [search, setSearch] = React.useState('');

	const inputRef = useRef<HTMLInputElement>(null);

	const query = useQuery(ProductListQuery({ search }));

	const confirmSearch = () => {
		setSearch(inputSearch);
		inputRef.current?.blur();
	};

	const clearSearch = () => {
		setInputSearch('');
		setSearch('');
	};

	return (
		<SectionLayout
			title="Product List"
			aside={
				<Group miw="50%" gap="sm">
					<TextInput
						ref={inputRef}
						flex={1}
						placeholder="Search products..."
						value={inputSearch}
						onChange={setInputSearch}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								confirmSearch();
							}
						}}
						rightSection={
							<ActionIcon size="md" onClick={confirmSearch}>
								<IconSearch size={20} />
							</ActionIcon>
						}
					/>
				</Group>
			}
		>
			<SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
				{query.data?.map((product) => (
					<ProductListItemView key={product.id} product={product} />
				))}
			</SimpleGrid>

			{!query.data?.length && (
				<Alert icon={<IconSearch />} title="No products found">
					<Text size="sm">No products found for the search criteria</Text>
					<Button mt="md" onClick={clearSearch}>
						Clear search
					</Button>
				</Alert>
			)}
		</SectionLayout>
	);
};

export default ProductListController;
