import { setIsfilterLikes } from "@/lib/features/productSlice"
import { AppDispatch, RootState } from "@/lib/store"
import { Heart } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"

const ProductGrupHeader = () => {
    const productCatalog = useSelector((state: RootState) => state.product.isfilterLikes)
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="flex justify-between pt-10">
            <div>
                <div className="text-lg font-bold">Content title goes here</div>
            </div>
            <div className="flex  items-center gap-2">
                <div><Heart /> </div>
                <div>0 ÜRÜN </div>
                <button onClick={()=> dispatch(setIsfilterLikes())} className="btn btn-primary bg-blue-800 w-32">
                {productCatalog ? "Gizle" : "Beğenilenler"}
                </button>
            </div>
        </div>
    )
}

export default ProductGrupHeader