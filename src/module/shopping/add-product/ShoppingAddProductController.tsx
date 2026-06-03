import { Button, Group, Select, Stack } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import type ProductDetailModel from '@/module/product/detail/ProductDetailModel';
import type ShoppingAddProductModel from './ShoppingAddProduct.model';
import useAddProductMutation from './useAddProductMutation';

type ShoppingAddProductControllerProps = {
	product: ProductDetailModel;
};

const ShoppingAddProductController = (
	props: ShoppingAddProductControllerProps,
) => {
	const { product } = props;

	const defaultColorCode =
		product.options.colors.length === 1
			? product.options.colors[0].code
			: undefined;
	const defaultStorageCode =
		product.options.storages.length === 1
			? product.options.storages[0].code
			: undefined;

	const [colorCode, setColorCode] =
		useInputState<ShoppingAddProductModel['colorCode']>(defaultColorCode);
	const [storageCode, setStorageCode] =
		useInputState<ShoppingAddProductModel['storageCode']>(defaultStorageCode);

	const mutation = useAddProductMutation();

	return (
		<Stack mt={20}>
			<Select
				label="Color"
				placeholder="Select color"
				data={product.options.colors.map((color) => ({
					label: color.name,
					value: color.code,
				}))}
				value={colorCode}
				onChange={setColorCode}
				unselectable="off"
			/>

			<Select
				label="Storage"
				placeholder="Select storage"
				data={product.options.storages.map((storage) => ({
					label: storage.name,
					value: storage.code,
				}))}
				value={storageCode}
				onChange={setStorageCode}
				unselectable="off"
			/>

			<Button
				disabled={!colorCode || !storageCode}
				loading={mutation.isPending}
				onClick={() => mutation.mutate({ product, colorCode, storageCode })}
			>
				Add to cart
			</Button>
		</Stack>
	);
};

export default ShoppingAddProductController;
