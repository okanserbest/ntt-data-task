"use client";
import React from 'react'
import Image from 'next/image'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import stylesEmbla from './embla.module.css';

const options = {};

import useEmblaCarousel from 'embla-carousel-react'
import { Product } from '@/lib/features/productSlice';
import ProductCard from '../ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';


export type EmblaCarouselProps = {
}

const EmblaProductCarousel = (props:EmblaCarouselProps) => {
  // const {products} = props;

  const productCatalog = useSelector((state: RootState) => state.product);

  // first 10 products
  const products = productCatalog.products.slice(0, productCatalog.value * 4);

  const showProducts = productCatalog.isfilterLikes
    ? products.filter((product) => productCatalog.likeIds.includes(product.id))
    : products;

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)


  return (
    <section  className={stylesEmbla.embla} >
      <div className={stylesEmbla.embla__viewport} ref={emblaRef}>
        <div  className={stylesEmbla.embla__container}>
          {showProducts.map((product,index) => (
            <div className='w-full' key={index}>

            <ProductCard
              
              
              product={product}
              isLiked={productCatalog.likeIds.includes(product.id)}
              />
              </div>
          ))}
        </div>
      </div>

      <div  className={stylesEmbla.embla__controls}>
        <div className={stylesEmbla.embla__dots}>
          {showProducts.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
            //   className={'embla__dot'.concat(
            //     index === selectedIndex ? ' embla__dot--selected' : ''
            //   )}

              className={ index === selectedIndex?  stylesEmbla.embla__dot__selected:stylesEmbla.embla__dot}  
              
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaProductCarousel
