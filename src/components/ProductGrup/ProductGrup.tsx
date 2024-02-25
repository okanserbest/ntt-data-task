import { Heart } from "lucide-react"
import ProductGrupHeader from "./ProductGrupHeader"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import { fetchLikes } from "@/lib/features/productSlice";
import ProductList from "./ProductList";
import SeeAllButton from "./SeeAllButton";

const ProductGrup = () => {
    return (
        <div className=" max-w-6xl mx-auto  pt-10">
            <ProductGrupHeader />
            <ProductList />
            <SeeAllButton />
        </div>
    )
}

export default ProductGrup