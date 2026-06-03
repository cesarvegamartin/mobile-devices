import { ActionIcon, Indicator } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';
import useShoppingCartCount from './useShoppingCartCount';

const ShoppingCartWidget = () => {
	const count = useShoppingCartCount();

	return (
		<Indicator disabled={!count} inline label={count} size="xl" color="blue">
			<ActionIcon variant="light" radius="xl">
				<IconShoppingCart size={20} />
			</ActionIcon>
		</Indicator>
	);
};

export default ShoppingCartWidget;
