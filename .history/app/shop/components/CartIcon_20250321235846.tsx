"use client";

import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CartIcon = () => {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Proveravamo da li već postoji nešto u korpi (može se kasnije proširiti lokalnim skladištem)
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(storedCart.length);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-green-600 transition"
      onClick={() => router.push("/shop/cart")}
    >
      <FaShoppingCart size={28} />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
