import ProductCard from "../cards/ProductCard";

export default function FeaturedProducts({ products = [] }) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl font-bold mb-10">
          Fresh Recommendations
        </h2>

        {products.length > 0 ? (
          <div className="flex gap-6 overflow-x-auto pb-4">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-10 text-center shadow">
            <h3 className="text-xl font-semibold text-gray-700">
              No Products Found
            </h3>
            <p className="text-gray-500 mt-2">
              Be the first one to post an ad.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}