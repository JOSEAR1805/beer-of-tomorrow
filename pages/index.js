import { useEffect, useState } from 'react';
import LayoutApp from "@components/layouts";
import ListProduct from '@components/listProducts';
import axios from 'axios';

const Home = () => {

    const [products, setProducts] = useState([]);

    const handleGetProducts = () => {
        axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=8')
            .then(response => {
                const { status, data } = response;
                status === 200 && setProducts(data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        handleGetProducts();
    }, []);

    return (
        <LayoutApp>
            <ListProduct products={products} />
        </LayoutApp>
    )
}


export default Home;