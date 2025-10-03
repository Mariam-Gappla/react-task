import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from '../../components/ProductDetails';
import { fetchproductsById } from '../../Redux/slices/productSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const DetailsPage = () => {
    const { id } = useParams();
    const { product, productLoading, productError } = useSelector((state) => state.products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchproductsById(id));
    }, [id]);

    if (productLoading) {
        return <p className="text-center text-lg">Loading...</p>;
    }
    // ✅ لو في Error
    if (productError) {
        return <p className="text-center text-red-500">Error: {productError}</p>;
    }
    return (
        <>
            <ProductDetails content={product} />
        </>
    )

}
export default DetailsPage;