import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import myAxios from "../../lib/axios";
import Navbar from "../../components/navbar";

const ProductPage = () => {
    const { idProduct } = useParams();

    const { data:product, isLoading, error } = useQuery({
        queryKey: ['product', idProduct],
        queryFn: () => myAxios.get(`products/${idProduct}`).data
    })

    console.log(product);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <>
            <Navbar />
            <div className="w-full h-screen flex justify-center items-center">
                <div className="flex w-full h-full">
                    <div className="w-full">
                        <img src={product?.image} alt={product?.title} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage