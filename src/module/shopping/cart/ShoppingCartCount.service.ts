import Cookies from 'js-cookie';
import queryClient from '@/core/query/queryClient';
import SHOPPING_CART_QUERY_KEY from './ShoppingCart.queryKey';

const getCount = () => Number(Cookies.get('cartCount') || 0);

const addCount = (addCount: number) => {
	const currentCount = getCount();
	const newCount = currentCount + addCount;

	queryClient.setQueryData([SHOPPING_CART_QUERY_KEY, 'cartCount'], newCount);

	Cookies.set('cartCount', String(newCount), {
		expires: import.meta.env.VITE_CACHE_IN_HOURS / 24,
	});

	return newCount;
};

const ShoppingCartCountService = {
	add: addCount,
	get: getCount,
} as const;

export default ShoppingCartCountService;
