import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { createCar } from "../../api/cars";
import { Car } from "../../types";

interface CreateCarFormProps {
  handleClose: () => void;
  cars?: Car[];
  setCars: Dispatch<SetStateAction<Car[]>>;
}

function CreateCarForm({
  handleClose,
  cars = [],
  setCars,
}: CreateCarFormProps) {
  const [car, setCar] = useState<Partial<Car>>({ status: "available" });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const handleCreateAction = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const uniqueId = new Date().valueOf();

    if (!car.brand || !car.licensePlate || !car.status) return;

    const createdCar: Car = await createCar(
      uniqueId,
      car.brand,
      car.licensePlate,
      car.status
    );
    setCar({});
    setCars([...cars, createdCar]);
    handleClose();
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <form onSubmit={handleCreateAction}>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col">
                <label htmlFor="brand">
                  <p className="font-medium text-slate-700 pb-2">Brand</p>
                  <input
                    onChange={handleChange}
                    id="brand"
                    name="brand"
                    type="brand"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter brand"
                  />
                </label>

                <label htmlFor="licensePlate">
                  <p className="font-medium text-slate-700 pb-2">
                    licensePlate
                  </p>
                  <input
                    onChange={handleChange}
                    id="licensePlate"
                    name="licensePlate"
                    type="licensePlate"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                    placeholder="Enter license plate"
                  />
                </label>

                <label htmlFor="statusField">
                  <p className="font-medium text-slate-700 pb-2">Status</p>

                  <select
                    onChange={handleChange}
                    id="statusField"
                    name="status"
                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  >
                    <option value="available">available</option>
                    <option value="in-maintenance">in-maintenance</option>
                    <option value="out-of-service">out-of-service</option>
                  </select>
                </label>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  disabled={!car.brand || !car.licensePlate || !car.status}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  OK
                </button>
                <button
                  onClick={() => handleClose()}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateCarForm;
