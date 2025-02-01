import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import myAxios from "../../lib/axios";

const ProductPage = () => {
    const { idProduct } = useParams();

    const { data:product, isLoading, error } = useQuery({
        queryKey: ['product', idProduct],
        queryFn: () => myAxios.get(`products/${idProduct}`)
    })

    console.log(product);


    return (
        <div>
            <h1>Product {idProduct} Page</h1>
        </div>
    )
}

export default ProductPage