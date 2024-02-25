"use client";
import { fetchLikes, setIsfilterLikes } from "@/lib/features/productSlice"
import { AppDispatch, RootState } from "@/lib/store"
import { Heart } from "lucide-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const ProductGrupHeader = () => {
    const productCatalog = useSelector((state: RootState) => state.product)
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        dispatch(fetchLikes());
      }, [dispatch]);

    return (
        <div className="flex justify-between pt-10">
            <div className="self-center">
                <div className="text-2xl font-bold">Content title goes here</div>
            </div>
            <div className="flex  items-center gap-2">
                <div><Heart /> </div>
                {`${productCatalog.likeIds.length} Ürün`}
                <button onClick={()=> dispatch(setIsfilterLikes())} className="btn btn-primary bg-blue-800 w-32">
                {productCatalog.isfilterLikes ? "Tümü" : "Beğenilenler"}
                </button>
            </div>
        </div>
    )
}

export default ProductGrupHeader