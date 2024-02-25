"use client";
import { increment } from "@/lib/features/productSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SeeAllButton = () => {
  const productCatalog = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();

  const notHaveMore =
    productCatalog.value * 4 >= productCatalog.products.length;

    if(productCatalog.isfilterLikes) return <div className="py-7" />;

  return (
    <div className="w-full text-center p-7">
      {notHaveMore ? (
        <button className="btn btn-disabled" role="button" aria-disabled="true">
          Tümü Gösteriliyor
        </button>
      ) : (
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-primary bg-blue-800 w-52"
        >
          Daha Fazla <ArrowRight />
        </button>
      )}
    </div>
  );
};
export default SeeAllButton;
