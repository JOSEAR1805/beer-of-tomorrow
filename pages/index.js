import LayoutApp from "@components/layouts";
import ListProduct from '@components/listProducts';
import fetch from "node-fetch";

export const getStaticProps = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers?page=2&per_page=8")
    const products = await response.json()

    return {
        props: {
            products
        }
    }
}

const Home = ({ products }) => {

    return (
        <LayoutApp>
            <ListProduct products={products} />
        </LayoutApp>
    )
}


export default Home;