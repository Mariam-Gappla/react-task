import Product from "./Product";

function ProductList({products,limit}) {
  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">No products found</p>;
  }
  const visibleProducts = limit ? products.slice(0, limit) : products;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {visibleProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>

  );
}

export default ProductList;
