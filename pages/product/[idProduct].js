import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import LayoutApp from "src/components/layouts";
import ProductDetails from "src/components/productDetails";
import axios from "axios";

export default function Home() {
    const { query } = useRouter();

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})

    const handleGetBeer = async () => {
        await axios.get(`https://api.punkapi.com/v2/beers/${query.idProduct}`)
            .then(response => {
                console.log("useEffect", response)
                const { status, data } = response;
                status === 200 && setProduct(data[0])
            })
            .catch(function (error) {
                console.log(error);
            })

        setLoading(false)
    }

    useEffect(() => {
        query.idProduct && handleGetBeer()
    },[query.idProduct])

    return (
        <LayoutApp>
            <ProductDetails product={product} loading={loading}/>
        </LayoutApp>
    )
}
