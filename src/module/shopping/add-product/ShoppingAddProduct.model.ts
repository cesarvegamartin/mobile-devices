import type ProductDetailModel from '@/module/product/detail/ProductDetailModel';

type ShoppingAddProductModel = {
	product: ProductDetailModel;
	colorCode?: number;
	storageCode?: number;
};

export default ShoppingAddProductModel;
