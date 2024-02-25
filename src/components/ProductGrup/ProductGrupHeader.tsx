import { Heart } from "lucide-react"

const ProductGrupHeader = () => {
    return (
        <div className="flex justify-between pt-10">
            <div>
                <div className="text-lg font-bold">Content title goes here</div>
            </div>
            <div className="flex  items-center gap-2">
                <div><Heart /> </div>
                <div>0 ÜRÜN </div>
                <button className="btn btn-primary bg-blue-800 w-32">
                Beğenilenler
                </button>
            </div>
        </div>
    )
}

export default ProductGrupHeader