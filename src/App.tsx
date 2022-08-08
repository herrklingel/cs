import React, { useEffect, useState } from "react";
import { getCars } from "./api/cars";
import CreateCarForm from "./components/CreateCarForm/CreateCarForm";
import CarList from "./components/List/CarList";
import { Car } from "./types";

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [showCreateCarFormModal, setShowCreateCarFormModal] = useState(false);

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
      <button
        onClick={() => setShowCreateCarFormModal(true)}
        type="button"
        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Car
      </button>
      {showCreateCarFormModal && (
        <CreateCarForm
          setCars={setCars}
          cars={cars}
          handleClose={() => setShowCreateCarFormModal(false)}
        />
      )}
    </div>
  );
}

export default App;
