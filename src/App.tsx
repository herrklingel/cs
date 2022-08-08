import React, { useEffect, useState } from "react";
import { getCars } from "./api/cars";
import CarList from "./components/List/CarList";
import { Car } from "./types";

function App() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const getCarsData = async () => {
      const cars = await getCars();
      setCars(cars);
    };
    getCarsData();
  }, []);

  return (
    <div className="mx-10">
      <h1 className="text-3xl font-bold my-10 text-center">Fleet</h1>
      <CarList cars={cars} />
    </div>
  );
}

export default App;
