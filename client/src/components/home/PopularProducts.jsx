import ProductCard from "../cards/ProductCard";

export default function PopularProducts({ products = [] }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl font-bold mb-10">
          Popular Near You
        </h2>

        {products.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
              Products will appear here after users post ads.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}