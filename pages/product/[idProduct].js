import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import LayoutApp from "@components/layouts";
import ProductDetails from "@components/productDetails";
import axios from "axios";

export default function Home() {
    const { query } = useRouter();

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})

    useEffect(() => {
        const handleGetBeer = async () => {
            await axios.get(`https://api.punkapi.com/v2/beers/${query.idProduct}`)
                .then(response => {
                    const { status, data } = response;
                    status === 200 && setProduct(data[0])
                })
                .catch(function (error) {
                    console.log(error);
                })
    
            setLoading(false)
        }

        query.idProduct && handleGetBeer()
    },[query.idProduct])

    return (
        <LayoutApp>
            <ProductDetails product={product} loading={loading}/>
        </LayoutApp>
    )
}
