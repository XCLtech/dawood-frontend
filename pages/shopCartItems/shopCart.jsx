import React from 'react';
import Wahab from '~/components/shopp/shopItems';
import { CartProvider } from 'react-use-cart';
const shop = () => {
    return (
        <CartProvider>
            <Wahab />
        </CartProvider>
    );
};

export default shop;
