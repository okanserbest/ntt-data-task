"use client";
import React from 'react'
import Image from 'next/image'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import stylesEmbla from './embla.module.css';
import slider1 from "@/resources/slider/slider1.png";
import slider2 from "@/resources/slider/slider2.png";
import slider3 from "@/resources/slider/slider3.png";
import slider4 from "@/resources/slider/slider4.png";


const sliderImages = [
    slider1, // Bu yolları projenize göre güncelleyin
    slider2,
    slider3,
    slider4,
  ];

import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)


  return (
    <section  className={stylesEmbla.embla} >
      <div className={stylesEmbla.embla__viewport} ref={emblaRef}>
        <div  className={stylesEmbla.embla__container}>
          {sliderImages.map((image,index) => (
            <div className={stylesEmbla.embla__slide} key={index}>
            <Image className={stylesEmbla.embla__slide__img} src={sliderImages[index]} alt="slider1"  width={1440} height={550} />
            </div>
          ))}
        </div>
      </div>

      <div  className={stylesEmbla.embla__controls}>
        <div className={stylesEmbla.embla__dots}>
          {scrollSnaps.map((_, index) => (
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

export default EmblaCarousel
