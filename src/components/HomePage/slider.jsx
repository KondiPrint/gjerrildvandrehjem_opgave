import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomNextArrow, CustomPrevArrow } from './customarrows';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1565,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };
    return (
      <article>
        <div className='container mx-auto text-center font-main_font text-fontFarve my-10'>
          <h3 className='text-4xl uppercase'>TITEL: Vi tilbyder</h3>
          <Slider {...settings}>
            <div>
              <h4 className='text-2xl my-3'>UNDERTITEL_1: Konferencerum</h4>
              <p className='pb-5'>CONTENT_1: Afhold jeres kurser, konference eller internater hos os og lad os stå for lækker forplejning før, under og efter mødet/undervisningen.</p>
              <img src='/assets/images/konferencemedkant.png' alt='' className='m-auto lg:h-[500px] lg:w-[800px] h-[250px] w-[400px] md:h-[350px] md:w-[600px]' />
            </div>
            <div>
              <h4 className='text-2xl my-3'>UNDERTITEL_2: Mad</h4>
              <p className='pb-5'>CONTENT_2: På Gjerrild Vandrerhjem er vi utroligt glade for mad! Hvad end du har af ønsker, så kan vi kreere det.</p>
              <img src='/assets/images/madmedkant.png' alt='' className='lg:h-[500px] lg:w-[800px] h-[250px] w-[400px] md:h-[350px] md:w-[600px] m-auto' />
            </div>
          </Slider>
          <button className='btn-sm hover:brightness-90 rounded-2xl px-10 uppercase font-semibold bg-reseda text-offWhite lg:mt-14 mt-8'>Læs mere</button>
        </div>
      </article>
    );
  }
}
