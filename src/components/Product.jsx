import { Link } from "react-router-dom";

const Product = ({product}) => {
  return (
    <div className="border rounded-lg shadow p-4 text-center hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>

      <div className="mt-3 flex justify-center gap-2">
        <Link
          to={`/products/${product.id}`}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
