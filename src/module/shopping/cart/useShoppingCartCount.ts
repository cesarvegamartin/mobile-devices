import { useQuery } from '@tanstack/react-query';
import SHOPPING_CART_QUERY_KEY from './ShoppingCart.queryKey';
import ShoppingCartCountService from './ShoppingCartCount.service';

const useShoppingCartCount = () => {
	const { data: cartCount = 0 } = useQuery({
		queryKey: [SHOPPING_CART_QUERY_KEY, 'cartCount'],
		queryFn: () => ShoppingCartCountService.get(),
		initialData: () => ShoppingCartCountService.get(),
	});

	return cartCount;
};

export default useShoppingCartCount;
