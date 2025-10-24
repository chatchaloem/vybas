type Car = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

interface CarCardProps {
  cars: Car;
  isActive?: boolean;
  faded?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({ cars, isActive, faded }) => {
  return (
    <div
      className={`transition-all duration-500 ${
        isActive ? "scale-110" : faded ? "opacity-50 scale-90" : "opacity-80"
      }`}
    >
      <img
        src={cars.image}
        alt={cars.title}
        className="w-[400px] object-contain mx-auto"
      />
      <h3 className="text-xl font-bold mt-4 text-center">{cars.title}</h3>
      <p className="text-gray-500 text-center">{cars.subtitle}</p>
    </div>
  );
};

export default CarCard;