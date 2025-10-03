import ProductList from "../../components/ProductList";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchproducts } from "../../Redux/slices/productSlice";
const Home = () => {
    const { fetchedProduct, fetchedLoadingProduct, fetchedErrorProduct } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);
    if (fetchedLoadingProduct) {
        return <p className="text-center text-lg">Loading...</p>;
    }
    // ✅ لو في Error
    if (fetchedErrorProduct) {
        return <p className="text-center text-red-500">Error: {fetchedErrorProduct}</p>;
    }
    return (
        <>
            <div
                className="w-full h-[60vh] bg-cover bg-center mb-7"
                style={{ backgroundImage: "url('/hero.png')" }}
            >
                <h1 className="text-white text-center text-4xl p-10 pt-30">Welcome to Shopping</h1>
            </div>

            <ProductList products={fetchedProduct} limit={6} />
        </>
    )
}
export default Home;