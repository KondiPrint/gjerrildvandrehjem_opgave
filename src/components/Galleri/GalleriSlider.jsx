'use client'

import { Carousel } from "@material-tailwind/react";
import data from "../../../public/assets/json_files/galleri.json"



export function GalleriSlider() {

    console.log(data.content);

    return (

        <Carousel
      className="rounded-xl h-96 container mx-auto my-5"
      autoplay={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
        {data &&
    data.content.map((e, i) => {
        return (
            <img key={i} src={`../../assets/images/Galleri/${e.image}`} alt="" className="h-full w-full object-cover"/>
        )
    })
    }
    </Carousel>
    );
}