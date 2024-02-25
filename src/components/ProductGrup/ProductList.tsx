import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const ProductList = () => {
    const productCatalog = useSelector((state: RootState) => state.product)

    // first 10 products
    const products = productCatalog.products.slice(0, productCatalog.value*4)


    return (
        <div>
        <h1>Product List</h1>
        </div>

    );
}