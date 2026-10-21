
"use client";

import Slider from "react-slick";
import Image from "next/image";

const images = [
  { id: 1, src: "/ex.jpg", title: "Wedding" },
  { id: 2, src: "/img1.jpg", title: "Portrait" },
  { id: 3, src: "/img2.jpg", title: "Nature" },
  { id: 4, src: "/ex.jpg", title: "Events" },
  { id: 5, src: "/imge.jpg", title: "Fashion" },
  { id: 6, src: "/logo.png", title: "Travel" },
];

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Our Gallery
      </h2>

      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="px-2">
            <div className="relative h-64 overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-500 hover:scale-110"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">
                  {image.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
