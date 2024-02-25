"use client";
import { Heart } from "lucide-react"
import ProductGrupHeader from "./ProductGrupHeader"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { fetchLikes } from "@/lib/features/productSlice";

const ProductGrup = () => {
    const productCatalog = useSelector((state: RootState) => state.product)
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        dispatch(fetchLikes());
      }, []);

    console.log(productCatalog)
    return (
        <div className=" max-w-6xl mx-auto  pt-10">

            <ProductGrupHeader />

            
        </div>
    )
}

export default ProductGrup