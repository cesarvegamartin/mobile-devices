import { notifications } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import ShoppingCartCountService from '../cart/ShoppingCartCount.service';
import ShoppingAddProductService from './ShoppingAddProduct.service';

const useAddProductMutation = () => {
	const mutation = useMutation({
		mutationFn: ShoppingAddProductService,
		mutationKey: ['addProduct'],
		onSuccess: (data) => {
			const newCount = ShoppingCartCountService.add(data.count);
			notifications.show({
				title: 'Product added',
				message: `Product added to the cart. Total products: ${newCount}`,
				color: 'green',
			});
		},
		onError: (error) => {
			console.log(error);
			notifications.show({
				title: 'Error',
				message: error.message,
				color: 'red',
			});
		},
	});

	return mutation;
};

export default useAddProductMutation;
