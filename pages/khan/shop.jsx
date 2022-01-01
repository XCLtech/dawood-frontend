import React from 'react';
import Wahab from '@/components/wahab/shopp';
import { CartProvider } from 'react-use-cart';
const shop = () => {
    return (
        <CartProvider>
            <Wahab />
        </CartProvider>
    );
};

export default shop;
