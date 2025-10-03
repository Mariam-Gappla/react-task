import ProductList from "../../components/ProductList";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchproducts } from "../../Redux/slices/productSlice";
const Products = () => {

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
            <ProductList products={fetchedProduct} />
        </>
    )
}
export default Products;