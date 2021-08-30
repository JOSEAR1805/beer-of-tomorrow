import { useEffect, useState } from 'react';
import LayoutApp from "src/components/layouts";
import ListProduct from 'src/components/listProducts';
import axios from 'axios';
import ShoppingCart from '@components/shoppingCart';

const Cart = () => {

    return (
        <LayoutApp>
            <ShoppingCart />
        </LayoutApp>
    )
}


export default Cart;