
function ProductDetails({content}) {
  if (!content) {
    return <p className="text-gray-500">No product data</p>;
  }
  return (
    <div className="max-w-6xl mx-auto p-6 flex gap-8 items-start">
     <div className="w-1/2">
      <img src={content.image} alt={content.title} className="w-full h-90 object-cover rounded" />
     </div>
     <div className="w-1/2">
       <h1 className="text-3xl font-bold mt-4">{content.title}</h1>
      <p className="text-gray-700 mt-2">${content.price}</p>
      <p className="mt-4">{content.description}</p>
      <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Add To Card
      </button>
     </div>
    </div>
  );
}

export default ProductDetails;
