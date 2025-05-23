"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import ProductList from "../components/ProductList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartIcon from "../components/CartIcon";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const ProductPage = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!params.id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dinoparkwebshop-backend-1081514700612.us-central1.run.app/api/Product/${params.id}`
        );
        if (!response.ok) throw new Error("Failed to fetch product");

        const data: Product = await response.json();
        setProduct(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <section className="bg-white min-h-screen py-20 px-6 mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Nazad dugme sa ikonicom */}
        <button
          onClick={() => router.back()}
          className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-full shadow hover:bg-gray-300 transition text-lg"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Loading, Error ili Prikaz Proizvoda */}
        {loading && <p className="text-center text-lg text-gray-600">Učitavanje...</p>}

        {error && (
          <p className="text-center text-lg text-red-500">
            Greška pri učitavanju proizvoda. Pokušajte ponovo kasnije.
          </p>
        )}

        {product && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="relative w-full h-96">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg mt-4">
                  {product.description}
                </p>
                <p className="text-green-500 text-2xl font-bold mt-6">
                  {product.price} RSD
                </p>

                <button
                  onClick={handleAddToCart}
                  className="mt-6 px-6 py-3 bg-green-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-600 transition flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Dodaj u korpu
                </button>
              </div>
            </div>

            {/* Slični proizvodi */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Slični proizvodi
              </h2>
              <ProductList
                page={1}
                onPageChange={() => {}}
                query={product.name.slice(-1)}
              />
            </div>
          </>
        )}
      </div>
      <CartIcon/>
    </section>
    
  );
};

export default ProductPage;
