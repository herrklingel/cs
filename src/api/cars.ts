import { CarStatus } from "../types";

export async function getCars() {
  const carsResponse = await fetch("/cars");

  return await carsResponse.json();
}

export async function createCar(
  id: number,
  brand: String,
  licensePlate: string,
  status: CarStatus
) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      brand,
      licensePlate,
      status,
    }),
  };
  const carsResponse = await fetch(`/cars/${id}`, requestOptions);

  return await carsResponse.json();
}
