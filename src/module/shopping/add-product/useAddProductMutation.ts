import { useMutation } from '@tanstack/react-query';
import ShoppingCartCountService from '../cart/ShoppingCartCount.service';
import ShoppingAddProductService from './ShoppingAddProduct.service';

const useAddProductMutation = () => {
	const mutation = useMutation({
		mutationFn: ShoppingAddProductService,
		mutationKey: ['addProduct'],
		onSuccess: (data) => {
			ShoppingCartCountService.add(data.count);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	return mutation;
};

export default useAddProductMutation;
