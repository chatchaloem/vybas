import { useState } from "react";
import CarCard from "./CarCard";
import car1 from "./assets/images/car1.png";

const CarSlider = () => {
  const cars = [
    {
      id: 1,
      image: car1,
      title: "TEMERARIO",
      subtitle: "YOU CAN'T HIDE WHO YOU ARE",
    },
    {
      id: 2,
      image: "/images/car2.png",
      title: "URUS",
      subtitle: "UNLEASH THE BEAST",
    },
    {
      id: 3,
      image: "/images/car3.png",
      title: "HURACAN",
      subtitle: "RACING DNA",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? cars.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev === cars.length - 1 ? 0 : prev + 1));

  return (
    <section id="car1" className="relative w-full h-screen bg-white flex flex-col justify-center items-center px-6 md:px-16 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold uppercase tracking-wide">
          {cars[index].title}
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mt-2">
          {cars[index].subtitle}
        </h1>
      </div>

      {/* Cars */}
      <div className="relative flex items-center justify-center w-full">
        {/* Prev Car */}
        <div className="absolute left-0 hidden md:block">
          <CarCard cars={cars[(index - 1 + cars.length) % cars.length]} faded />
        </div>

        {/* Current Car */}
        <CarCard cars={cars[index]} isActive />

        {/* Next Car */}
        <div className="absolute right-0 hidden md:block">
          <CarCard cars={cars[(index + 1) % cars.length]} faded />
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-12 bg-white border p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-12 bg-white border p-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          ▶
        </button>
      </div>

      {/* CTA */}
      <div className="flex gap-6 mt-10">
        <a
          href="#explore"
          className="bg-yellow-600 text-white px-6 py-3 font-bold uppercase hover:bg-yellow-700 transition"
        >
          Get Start →
        </a>
      </div>
    </section>
  );
};

export default CarSlider;