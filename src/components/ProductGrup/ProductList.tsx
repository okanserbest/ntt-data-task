"use client";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const productCatalog = useSelector((state: RootState) => state.product);

  // first 10 products
  const products = productCatalog.products.slice(0, productCatalog.value * 4);

  const showProducts = productCatalog.isfilterLikes
    ? products.filter((product) => productCatalog.likeIds.includes(product.id))
    : products;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
        {showProducts.map((product,index) => (
          <ProductCard
            key={index}
            product={product}
            isLiked={productCatalog.likeIds.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
