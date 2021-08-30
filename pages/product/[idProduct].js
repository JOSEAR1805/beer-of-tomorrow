// import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import LayoutApp from "@components/layouts";
import ProductDetails from "@components/productDetails";
import fetch from "node-fetch";

// import axios from "axios";


export const getStaticPaths = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers?page=2&per_page=8")
    const products = await response.json()
    
    const paths = products.map(({ id }) => ({ 
        params: { idProduct: String(id) } 
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const id = params?.idProduct
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
    const product = await response.json()

    return {
        props: {
            product
        }
    }
}


export default function Home({ product }) {
    // const { query } = useRouter();

    const [loading, setLoading] = useState(true)
    // const [product, setProduct] = useState({})

    // const handleGetBeer = async () => {
    //     await axios.get(`https://api.punkapi.com/v2/beers/${query.idProduct}`)
    //         .then(response => {
    //             const { status, data } = response;
    //             status === 200 && setProduct(data[0])
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })

    //     setLoading(false)
    // }

    useEffect(() => {
        product && setLoading(false)
    },[product])

    return (
        <LayoutApp>
            <ProductDetails product={product} loading={loading} />
        </LayoutApp>
    )
}
