import { Product, changeLike } from "@/lib/features/productSlice";
import { AppDispatch } from "@/lib/store";
import { Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";

type productCardProps = {
  product: Product;
  isLiked: boolean;
};

const ProductCard = (props: productCardProps) => {
  const { product, isLiked = false } = props;
  const dispatch = useDispatch<AppDispatch>();

  const unLikeHeartClassName =
    "absolute top-0 right-0 m-2 p-2 text-gray-700 bg-white rounded-full z-10";
  const likeHeartClassName =
    "absolute top-0 right-0 m-2 p-2 text-white bg-red-700 rounded-full z-10";
  return (
    <div className="border-2 p-3 relative  min-w-[100vw] md:min-w-fit text-left">
      <Link href="https://nttdata-solutions.com/tr/">
        <Image
          src={product.imageUrl}
          width={480}
          height={640}
          alt={product.name}
        />
        <h3 className="py-1 px-2  font-extrabold text-lg">{product.name}</h3>
        <p className="py-1 px-2 font-bold text-md">{product.price}TL</p>
        <p className="py-1 px-2 font-bold">Description</p>
        <p className="py-1 px-2 line-clamp-2 tracking-tighter ">
          {product.description}
        </p>
        <p className="py-1 px-2 text-sm">{product.shippingMethod}</p>
      </Link>
      <button
        onClick={() => dispatch(changeLike(product.id))}
        className={isLiked ? likeHeartClassName : unLikeHeartClassName}
      >
        <Heart />
      </button>
    </div>
  );
};

export default ProductCard;
