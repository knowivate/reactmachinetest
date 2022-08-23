import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    let a = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let res = await a.json();
    if (res) {
      setProducts(res);
    } else {
      setProducts();
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="container px-2 sm:m-auto text-center">
              <h1 className="font-bold text-3xl my-6 text-center">Products</h1>
              {!products && (
                <>
                  <div className="text-center">...!</div>
                </>
              )}
              {products && products.length === 0 && (
                <>
                  <div className="text-center">No products found! Please add some products.</div>
                </>
              )}
            </div>

            {products &&
              products.length !== 0 &&
              products.map((product, i) => {
                return (
                  <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <div className="block relative h-48 rounded overflow-hidden">
                      <img alt={product.title} className="object-cover object-center w-full h-full block" src={product.image} />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{product.description.length > 70 ? product.description.slice(0, 60) + "..." : product.description}</h2>
                      <p className="mt-1 font-bold">${product.price}</p>
                      <p className="mt-1">{product.description.length > 70 ? product.description.slice(0, 70) + "..." : product.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
